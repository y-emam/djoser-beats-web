import Footer from "../components/footer";
import NavbarComponent from "../components/navbar";
import "./home.css";
import SongsList from "../components/songsList";
import headerVideo from "../assets/home.mp4";
import AboutSection from "../components/aboutSection";
import { useEffect } from "react";
import ReactGA from "react-ga";

function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="home-page">
      <NavbarComponent />
      <div className="home-header">
        <video className="videoTag" autoPlay loop muted>
          <source src={headerVideo} type="video/mp4" />
        </video>
        <div className="videoTag overlay"></div>
        <div className="image-content">
          <h1>Djoser Beats</h1>
          <p>Your Soundtrack, Your Way, Djoser Beats Today.</p>
        </div>
      </div>
      <SongsList isAllSongs={false} />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default Home;
