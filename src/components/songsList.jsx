import { useState } from "react";
import "./songList.css";
import { Link } from "react-router-dom";
import playSong from "../controllers/playSong";

function SongsList() {
  const [songs, setsongs] = useState([
    { name: "motto", bpm: 112, imageName: "motto.jpg", duration: "2:48" },
    { name: "fatrat", bpm: 112, imageName: "fatrat.jpg", duration: "2:48" },
    {
      name: "stressed out",
      bpm: 112,
      imageName: "stressed.png",
      duration: "2:48",
    },
  ]);

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
        <Link to={"/songDetails"} className="name">
          <p>{song.name}</p>
        </Link>
        <p className="duration">{song.duration}</p>
        <p className="bpm">{song.bpm}</p>
        <Link to={"/songDetails"} className="show-more">
          Show More
        </Link>
      </div>
    );
  });

  return (
    <div className="song-list">
      <div className="song-item">
        <p> </p>
        <p>Title</p>
        <p>Duration</p>
        <p>bpm</p>
        <p> </p>
      </div>
      {songsComponents}
    </div>
  );
}

export default SongsList;
