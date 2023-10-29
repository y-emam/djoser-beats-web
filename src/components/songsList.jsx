import "./songList.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeSong, startPlaying } from "../redux/reducers/playList";
import { FaCartPlus } from "react-icons/fa6";

function SongsList() {
  const playList = useSelector((state) => state.playList.value.playList);
  const dispatch = useDispatch();

  const songsComponents = playList.map((song) => {
    const handleSongClick = () => {
      dispatch(changeSong(song));
      dispatch(startPlaying());
    };

    return (
      <div className="song-item" key={song.name}>
        <img src={song.imageUrl} alt="song-pic" onClick={handleSongClick} />
        <p className="name" onClick={handleSongClick}>
          {song.name}
        </p>
        <p className="duration">{song.duration}</p>
        <p className="bpm">{song.bpm}</p>
        <Link
          to={{
            pathname: "/songDetails",
            // search: JSON.stringify(song),
            hash: JSON.stringify(song),
          }}
          className="show-more"
        >
          <FaCartPlus /> Add to Cart
        </Link>
      </div>
    );
  });

  return (
    <div className="song-list">
      {playList.length === 0 ? (
        "Loading Tracks..."
      ) : (
        <div className="song-item">
          <p> </p>
          <p>Title</p>
          <p>Duration</p>
          <p>bpm</p>
          <p> </p>
          {songsComponents}
        </div>
      )}
    </div>
  );
}

export default SongsList;
