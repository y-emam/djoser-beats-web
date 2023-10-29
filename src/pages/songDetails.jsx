import { useSelector } from "react-redux";
import Navbar from "../components/navbar";
import "./songDetails.css";
import {
  FaCartPlus,
  FaMicrophone,
  FaBroadcastTower,
  FaMusic,
  FaDollarSign,
  FaCalendar,
} from "react-icons/fa";
import addToCart from "../services/addToCart";
import { useLocation } from "react-router-dom";

function SongDetails() {
  const location = useLocation();
  const song = JSON.parse(decodeURIComponent(location.hash.slice(1)));

  console.log(song);
  console.log(song.packages);

  const packages = song.packages;

  const packagesComponents = packages.map((songPackage) => {
    return (
      <div className="package-item">
        <div className="name-price">
          <p className="name">{songPackage.name}</p>
          <button
            onClick={() => {
              addToCart(songPackage, song);
            }}
          >
            <FaCartPlus /> {Math.floor(songPackage.price).toFixed(2)}
          </button>
        </div>
        <div className="packages">
          <p>
            <FaMicrophone /> {songPackage.usages.musicRecording}
          </p>
          <p>
            <FaDollarSign /> {songPackage.usages.distributions}
          </p>
          <p>
            <FaBroadcastTower /> {songPackage.usages.audioStreams}
          </p>
          <p>
            <FaMusic /> {songPackage.usages.musicVideo}
          </p>
          <p>
            <FaMicrophone /> {songPackage.usages.livePerformances}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="song-details">
      <Navbar />
      {song._id ? (
        <div>
          <div className="header">
            <img src={song.imageUrl} alt="song-img" />
            <div className="content">
              <p className="name">{song.name}</p>
              <div style={{ display: "flex" }}>
                <p className="bpm">BPM: {song.bpm}</p>
                {/* &nbsp; &nbsp; */}
                {/* <p className="duration">
                  <FaClock /> {song.duration}
                </p> */}
              </div>
              <p className="date">
                <FaCalendar /> {song.date.split("T")[0]}
              </p>
              <div className="tags"></div>
            </div>
          </div>
          <div className="packages">{packagesComponents}</div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default SongDetails;
