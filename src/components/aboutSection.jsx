import "./aboutSection.css";

function AboutSection() {
  // todo: ask yehia if these are his services
  return (
    <div className="about-section">
      <div className="first-section">
        <img
          src={require("../assets/wallpaperflare.com_wallpaper (10).jpg")}
          alt=""
        />
        <div className="content">
          <h1>Best Tracks for Your Song</h1>
          <p>
            {" "}
            Get Tracks to fit your adsfad sf adsf adsf asdf adsf asdf asdf asdf
            asd song and get famous with it
          </p>
          <button>Some Shit</button>
        </div>
      </div>
      <div className="second-section">
        <div className="content">
          <h1>For Social Media</h1>
          <p>get the tracks to get your social media videos viral</p>
          <button>Some Shit</button>
        </div>
        <img src={require("../assets/wallpaper1.jpg")} alt="" />
      </div>
    </div>
  );
}

export default AboutSection;
