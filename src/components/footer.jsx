import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="sitemap">
        <ul>
          <Link to={"/"} className="link">
            <li>Home</li>
          </Link>
          <Link to={"/songs"} className="link">
            <li>All Beats</li>
          </Link>
          <Link to={"/cart"} className="link">
            <li>Cart</li>
          </Link>
          <Link to={"/contacts"} className="link">
            <li>Contact</li>
          </Link>
          <Link to={"/about"} className="link">
            <li>About</li>
          </Link>
        </ul>
      </div>
      <div className="contacts">
        <img src={require("../assets/logo.jpg")} alt="djoser-beats" />
        <div className="social">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/djoserbeats/"
          >
            <FaInstagram />
          </a>
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/@DjoserBeats"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
