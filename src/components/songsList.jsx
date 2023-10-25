import { useEffect, useState } from "react";
import "./songList.css";
import { Link } from "react-router-dom";
import playSong from "../controllers/playSong";

function SongsList() {
  const [songs, setsongs] = useState([]);

  useEffect(() => {
    console.log(process.env.REACT_APP_BACKEND_URL);
    fetch(`${process.env.REACT_APP_BACKEND_URL}/allSongs`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setsongs(data["songs"]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const songsComponents = songs.map((song) => {
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
      {songs.length === 0 ? (
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
