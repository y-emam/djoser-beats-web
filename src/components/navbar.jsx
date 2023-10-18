import { Image } from "react-bootstrap";
import logo from "../assets/logo.jpg";
import "../index.css";
import "bootstrap/js/src/collapse.js";
import "bootstrap/dist/js/bootstrap.bundle";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <a className="navbar-brand" href="/">
        <Image src={logo} width={50} className="navbar-logo" />
      </a>

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
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/songs"}>
              SONGS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/contacts"}>
              CONTACTS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/about"}>
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
