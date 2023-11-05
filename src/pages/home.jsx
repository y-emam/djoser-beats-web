import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "./home.css";
import ContactForm from "../components/contactForm";
import SongsList from "../components/songsList";
import headerVideo from "../assets/home.mp4";
import AboutSection from "../components/aboutSection";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
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
      <SongsList />
      <AboutSection />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
}

export default Home;
