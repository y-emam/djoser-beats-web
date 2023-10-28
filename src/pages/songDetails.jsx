import { useSelector } from "react-redux";
import Navbar from "../components/navbar";

function SongDetails() {
  const song = useSelector((state) => state.playList.value.currentPlayingSong);

  return (
    <div className="song-details">
      <Navbar />
      {song._id ? (
        <div className="header">
          <img src={song.imageUrl} alt="song-img" />
          <div className="content">
            {song.name} <div className="tags"></div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default SongDetails;
