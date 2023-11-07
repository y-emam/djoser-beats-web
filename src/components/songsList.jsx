import "./songList.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeSong, startPlaying } from "../redux/reducers/playList";
import { FaBars, FaCartShopping, FaPlay } from "react-icons/fa6";

function SongsList({ isAllSongs }) {
  const playList = useSelector((state) => state.playList.value.playList);
  const dispatch = useDispatch();

  const noSongsToShow = 10;
  const songsComponents = playList
    .slice(0, isAllSongs ? playList.length : noSongsToShow)
    .map((song) => {
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
          {/* <button
            className="show-more packages-button grid-item"
            id="play-button"
            onClick={handleSongClick}
          >
            <FaPlay className="icon" fontSize={"1rem"} fontWeight={"bold"} />
          </button> */}
          <Link
            to={{
              pathname: "/songs",
            }}
            className="show-more packages-button grid-item"
            onClick={handleSongClick}
            id="play-button"
          >
            <FaPlay />
          </Link>
          <Link
            to={{
              pathname: "/songDetails",
              // search: JSON.stringify(song),
              hash: JSON.stringify(song),
            }}
            className="show-more packages-button grid-item"
          >
            <FaCartShopping />
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
          <h1>{isAllSongs ? "All Songs" : "Popular Beats"}</h1>
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
                <p className="duration grid-item">Duration</p>
                <p className="bpm grid-item">bpm</p>
                <p className="grid-item"> </p>
              </li>
              {songsComponents}
            </ul>
            {isAllSongs ? null : (
              <Link
                to={{
                  pathname: "/songs",
                }}
                className="show-more grid-item"
              >
                Show More
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SongsList;
