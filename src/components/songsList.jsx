import "./songList.css";
import { Link } from "react-router-dom";
import playSong from "../controllers/playSong";
import { useSelector } from "react-redux";

function SongsList() {
  // const [songs, setsongs] = useState([]);
  const playListInd = useSelector(
    (state) => state.playList.value.currentPlayingSong
  );
  const playList = useSelector((state) => state.playList.value.playList);

  const songsComponents = playList.map((song) => {
    return (
      <div
        className="song-item"
        key={song.name}
        onClick={() => {
          playSong(song);
        }}
      >
        <img src={song.imageUrl} alt="song-pic" />
        <p className="name">{song.name}</p>
        <p className="duration">{song.duration}</p>
        <p className="bpm">{song.bpm}</p>
        <Link to={"/songDetails"} className="show-more">
          ${song.price.toFixed(2)}
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
