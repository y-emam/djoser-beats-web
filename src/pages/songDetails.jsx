import { useDispatch, useSelector } from "react-redux";
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
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/reducers/cartRedux";

function SongDetails() {
  const location = useLocation();
  const song = JSON.parse(decodeURIComponent(location.hash.slice(1)));
  const packages = song.packages;

  const dispatch = useDispatch();

  const packagesComponents = packages.map((songPackage) => {
    return (
      <div className="package-item" key={songPackage.name}>
        <div className="name-price">
          <p className="name">{songPackage.name}</p>
          <button
            onClick={() => {
              dispatch(
                addToCart({
                  songName: song.name,
                  packageName: songPackage.name,
                  price: songPackage.price,
                  imageUrl: song.imageUrl,
                })
              );

              // TODO: change the button to view Cart

              // TODO: disable adding if it is in cart else it works
              // TODO: disabling means navigate to cart instead of adding
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
