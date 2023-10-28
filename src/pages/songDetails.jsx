import { useSelector } from "react-redux";
import Navbar from "../components/navbar";
import "./songDetails.css";
import { FaClock } from "react-icons/fa";

function SongDetails() {
  const song = useSelector((state) => state.playList.value.currentPlayingSong);

  const packages = [1, 2, 3, 4];

  const packagesComponents = packages.map((songPackage) => {
    return <div>some shit</div>;
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
                &nbsp; &nbsp;
                <p className="duration">
                  <FaClock /> {song.duration}
                </p>
              </div>
              <p className="date">{song.date}</p>
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
