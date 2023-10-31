import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/navbar";
import "./cart.css";
import { FaX } from "react-icons/fa6";
import { removeFromCart } from "../redux/reducers/cartRedux";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { onApprove } from "../services/paypal";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.value.items);
  const dispatch = useDispatch();

  const totalPrice = useSelector((state) => {
    let price = 0;
    state.cart.value.items.forEach((item) => (price += item.price));
    return price;
  });

  const cartItemsComponents = cartItems.map((item) => (
    <div className="item">
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
                  onApprove={onApprove}
                  onError={() => {
                    console.log("Mission Failed");
                  }}
                  onCancel={() => {
                    // toDO: can show a window to contact us if he is having issues with paying
                    console.log("w2ft leh ysta");
                  }}
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
