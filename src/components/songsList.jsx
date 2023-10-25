import { useEffect, useState } from "react";
import "./songList.css";
import { Link } from "react-router-dom";
import playSong from "../controllers/playSong";

function SongsList() {
  const [songs, setsongs] = useState([]);

  useEffect(() => {
    // TODO: change the with correct endpoint
    fetch(`${process.env.REACT_APP_BACKEND_URL} / `)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setsongs();
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
        <img src={require(`../assets/${song.imageName}`)} alt="song-pic" />
        <p className="name">{song.name}</p>
        <p className="duration">{song.duration}</p>
        <p className="bpm">{song.bpm}</p>
        <Link to={"/songDetails"} className="show-more">
          ${song.price}
        </Link>
      </div>
    );
  });

  return (
    <div className="song-list">
      {/* songs [] ? : {songsComponents} */}
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
