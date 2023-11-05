import "./songList.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeSong, startPlaying } from "../redux/reducers/playList";

function SongsList() {
  const playList = useSelector((state) => state.playList.value.playList);
  const dispatch = useDispatch();

  const songsComponents = playList.map((song) => {
    const handleSongClick = () => {
      dispatch(changeSong(song));
      dispatch(startPlaying());
    };

    return (
      <li className="song-item" key={song.name}>
        <img
          className="grid-item"
          src={song.imageUrl}
          alt="song-pic"
          onClick={handleSongClick}
        />
        <p className="name grid-item" onClick={handleSongClick}>
          {song.name}
        </p>
        <p className="duration grid-item">{song.duration}</p>
        <p className="bpm grid-item">{song.bpm}</p>
        <Link
          to={{
            pathname: "/songDetails",
            // search: JSON.stringify(song),
            hash: JSON.stringify(song),
          }}
          className="show-more grid-item"
        >
          Show Packages
        </Link>
      </li>
    );
  });

  return (
    <div className="song-list">
      {playList.length === 0 ? (
        "Loading Tracks..."
      ) : (
        <div>
          <h1>Popular Beats</h1>
          <hr
            style={{
              color: "white",
              borderColor: "white",
              margin: "1rem 5rem ",
            }}
          />
          <div className="song-item">
            <ul>
              <li>
                <p className="grid-item"> </p>
                <p className="grid-item">Title</p>
                <p className="grid-item">Duration</p>
                <p className="grid-item">bpm</p>
                <p className="grid-item"> </p>
              </li>
              {songsComponents}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SongsList;
