import React, { useState, useEffect } from "react";
import { FaPause, FaPlay, FaStepForward, FaStepBackward } from "react-icons/fa";
import "./playBar.css";
import { ProgressBar } from "react-bootstrap";

const useAudio = (url) => {
  const [audio] = useState(new Audio(require("../assets/motto.mp3")));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const PlayerBar = ({ song }) => {
  const [playing, toggle] = useAudio();
  const [value, setvalue] = useState(50);

  const handleChange = (event) => {
    setvalue(event.target.value);
  };

  return (
    <div className="player-bar">
      <img src={require(`../assets/${song.imageName}`)} alt="song-img" />
      <p>{song.name}</p>
      <div>
        <div>
          <button>
            <FaStepBackward />
          </button>
          <button id="play-button" onClick={toggle}>
            {playing ? <FaPause /> : <FaPlay />}
          </button>
          <button>
            <FaStepForward />
          </button>
        </div>
        {/* <ProgressBar animated now={50} /> */}
        {/* <input
          id="typeinp"
          type="range"
          min="0"
          max="5"
          value={value}
          onChange={handleChange}
          step=""
        /> */}
      </div>
      <div>audio bar</div>
      <div>{song.duration}</div>
      <div>volume bar</div>
    </div>
  );
};

export default PlayerBar;
