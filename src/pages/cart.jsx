import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/navbar";
import "./cart.css";
import { FaX } from "react-icons/fa6";
import { removeFromCart } from "../redux/reducers/cartRedux";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { createOrder, onApprove, onCancel } from "../services/paypal";
import Footer from "../components/footer";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.value.items);
  const dispatch = useDispatch();

  const totalPrice = useSelector((state) => {
    let price = 0;
    state.cart.value.items.forEach((item) => (price += item.price));
    return price;
  });

  const cartItemsComponents = cartItems.map((item) => (
    <div className="item" key={item.songName + item.packageName}>
      <img src={item.imageUrl} alt="song-img" />
      <div className="item-details">
        <p className="song-name">{item.songName}</p>
        <p className="package-name">{item.packageName}</p>
      </div>
      <p className="price">{`$${item.price.toFixed(2)}`}</p>
      <button
        onClick={() => {
          dispatch(removeFromCart(item));
        }}
      >
        <FaX />
      </button>
    </div>
  ));

  return (
    <div className="cart-page">
      <Navbar />
      {cartItems.length > 0 ? (
        <div>
          <div className="content">
            <div className="cart-items">{cartItemsComponents}</div>
            <div className="checkout-list">
              <h2>Checkout</h2>
              <hr />
              <div className="total">
                <p className="title">Total Price: </p>
                <p className="price">{`$${totalPrice.toFixed(2)}`}</p>
              </div>
              <div className="paypal-button">
                <PayPalButtons
                  onApprove={(data, actions) => {
                    createOrder(data, actions, cartItems, "shit@shit.com");
                  }}
                  onError={(err) => {
                    console.log(`Mission Failed: ${err}`);
                  }}
                  onCancel={onCancel}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>There is nothing in the cart</div>
      )}
    </div>
  );
};

export default CartPage;
