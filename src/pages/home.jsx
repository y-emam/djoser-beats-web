import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "./home.css";
import ContactForm from "../components/contactForm";
import SongsList from "../components/songsList";
import { routeToPage } from "../controllers/routeing";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-header">
        {/* <img src={require("../assets/wallpaper1.jpg")} alt="music-wallpaepr" /> */}
        <div className="image-content">
          <h1>Djoser Beats</h1>
          <p>Your Soundtrack, Your Way, Djoser Beats Today.</p>
          <Link to={"/songs"}>Show Beats</Link>
        </div>
      </div>
      <SongsList />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
