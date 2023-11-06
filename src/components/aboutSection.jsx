import { useEffect } from "react";
import "./aboutSection.css";
import { Link } from "react-router-dom";

function AboutSection() {
  useEffect(() => {
    const observer = new IntersectionObserver((enteries) => {
      enteries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.classList.remove("hidden");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <div className="about-section">
      <div className="first-section">
        <img
          className="hidden img"
          src={require("../assets/wallpaperflare.com_wallpaper (10).jpg")}
          alt=""
        />
        <div className="content hidden">
          <h1>Take Your Track to the Next Level</h1>
          <p>
            {" "}
            Discover the path to excellence and elevate your track's performance
            to new heights
          </p>
          <Link
            to={{
              pathname: "/songs",
            }}
            className="show-more grid-item"
          >
            Show Beats
          </Link>
        </div>
      </div>
      <div className="second-section">
        <div className="content hidden">
          <h1>Unlock the Secrets to Social Media Stardom</h1>
          <p>
            Discover the hidden techniques and strategies that will propel your
            social media presence to stardom, ensuring your content shines
            brightly in the digital galaxy.
          </p>
          <Link
            to={{
              pathname: "/about",
            }}
            className="show-more  grid-item"
          >
            About Us
          </Link>
        </div>
        <img
          className="hidden img"
          src={require("../assets/wallpaper1.jpg")}
          alt=""
        />
      </div>
    </div>
  );
}

export default AboutSection;
