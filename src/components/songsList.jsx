import { useState } from "react";
import "./songList.css";
import { routeToPage } from "../controllers/routeing";
import PlayerBar from "../controllers/playSong";
import { Link } from "react-router-dom";

function SongsList() {
  const [songs, setsongs] = useState([
    { name: "motto", bpm: 112, imageName: "motto.jpg", duration: "2:48" },
    { name: "fatrat", bpm: 112, imageName: "fatrat.jpg", duration: "2:48" },
    {
      name: "stressed",
      bpm: 112,
      imageName: "stressed.png",
      duration: "2:48",
    },
  ]);

  const songsComponents = songs.map((song) => {
    return (
      <div className="song-item" key={song.name}>
        <img src={require(`../assets/${song.imageName}`)} alt="song-pic" />
        <p
          onClick={() => {
            routeToPage("/songDetails");
          }}
          className="name"
        >
          {song.name}
        </p>
        <p className="duration">{song.duration}</p>
        <p className="bpm">{song.bpm}</p>
        <Link to={"/songDetails"}>Show More</Link>
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
