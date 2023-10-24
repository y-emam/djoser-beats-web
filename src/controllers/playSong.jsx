import React, { useState, useEffect } from "react";
import { FaPause, FaPlay, FaStepForward, FaStepBackward } from "react-icons/fa";

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

  return (
    <div className="player-bar">
      <img src={require(`../assets/${song.imageName}`)} alt="song-img" />
      <p>{song.name}</p>
      <div>
        <div>
          <button>
            <FaStepBackward />
          </button>
          <button onClick={toggle}>{playing ? <FaPause /> : <FaPlay />}</button>
          <button>
            <FaStepForward />
          </button>
        </div>
        <div>bar</div>
      </div>
      <div>audio bar</div>
      <div>{song.duration}</div>
      <div>volume bar</div>
    </div>
  );
};

export default PlayerBar;
