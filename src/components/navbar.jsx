import { Image } from "react-bootstrap";
import logo from "../assets/logo.jpg";
import "../index.css";
import "bootstrap/js/src/collapse.js";
import "bootstrap/dist/js/bootstrap.bundle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.value.items);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <Link className="navbar-brand" to={"/"}>
        <Image src={logo} width={50} className="navbar-logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <Link className="nav-link" to={"/"}>
            <li className="nav-item">HOME</li>
          </Link>
          <Link className="nav-link" to={"/songs"}>
            <li className="nav-item">BEATS</li>
          </Link>
          <Link className="nav-link" to={"/contacts"}>
            <li className="nav-item">CONTACTS</li>
          </Link>
          <Link className="nav-link" to={"/cart"}>
            <li className="nav-item">
              CART
              {cartItems.length > 0 ? (
                <p className="cart-items-count">{cartItems.length}</p>
              ) : null}
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
