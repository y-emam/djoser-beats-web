import { useDispatch } from "react-redux";
import NavbarComponent from "../components/navbar";
import "./songDetails.css";
import {
  FaMicrophone,
  FaBroadcastTower,
  FaMusic,
  FaDollarSign,
  FaCalendar,
  FaStream,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/reducers/cartRedux";
import SongPackages from "../constants/songPackages";

function SongDetails() {
  const location = useLocation();
  const song = JSON.parse(decodeURIComponent(location.hash.slice(1)));

  //  todo: make the packages a global variable;

  // const packages = [];

  const dispatch = useDispatch();

  const packagesComponents = SongPackages.map((songPackage, ind) => {
    return (
      <div className="package-item" key={songPackage.name}>
        <div className="name-price">
          <p className="name">{songPackage.name}</p>
          <button
            className="add-package-button"
            onClick={() => {
              dispatch(
                addToCart({
                  songName: song.name,
                  packageName: songPackage.name,
                  price: songPackage.price,
                  imageUrl: song.imageUrl,
                  parentFolder: song.parentFolderUrl,
                })
              );
            }}
          >
            {`$${Math.floor(songPackage.price).toFixed(2)}`}
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
            <FaStream /> {songPackage.usages.audioStreams}
          </p>
          <p>
            <FaMusic /> {songPackage.usages.musicVideo}
          </p>
          <p>
            <FaBroadcastTower /> {songPackage.usages.radio}
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
      <NavbarComponent />
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
