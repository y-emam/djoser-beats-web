import React, { useState, useEffect } from "react";
import { FaPause, FaPlay, FaStepForward, FaStepBackward } from "react-icons/fa";
import "./playBar.css";

const useAudio = (url) => {
  const [audio, setAudio] = useState(new Audio(url));

  useEffect(() => {
    console.log(audio.src);
    setAudio(
      new Audio(
        // "https://firebasestorage.googleapis.com/v0/b/djoser-beats.appspot.com/o/motto.mp3?alt=media&token=5666e85d-afc5-46c8-b539-4d150e278a7e"
        "https://firebasestorage.googleapis.com/v0/b/djoser-beats.appspot.com/o/fatrat.mp3?alt=media&token=5cf62a07-d2d4-485e-b274-1aaaa427002e"
        // "https://firebasestorage.googleapis.com/v0/b/djoser-beats.appspot.com/o/stressed.mp3?alt=media&token=43f7c5cb-cfd1-4937-9c46-a93f0cd08f10"
      )
    );
  }, []);

  const [playing, setPlaying] = useState(false);

  const togglePlay = () => setPlaying(!playing);
  const toggleBackward = () => {
    if (Math.floor(audio.currentTime) < 1) {
      // TODO: check if there is a previous song
      // TODO: switch to previous song
    } else {
      audio.currentTime = 0;
    }
  };
  const toggleForward = () => {
    // TODO: check if there is a song next
    // TODO: switch to next song
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, togglePlay, toggleBackward, toggleForward];
};

const PlayerBar = ({ song }) => {
  const [playing, togglePlay, toggleBackward, toggleForward] = useAudio();
  const [value, setvalue] = useState(50);

  // const handleChange = (event) => {
  //   setvalue(event.target.value);
  // };

  return (
    <div className="player-bar">
      <img src={require(`../assets/${song.imageName}`)} alt="song-img" />
      <p>{song.name}</p>
      <div>
        <div>
          <button onClick={toggleBackward}>
            <FaStepBackward />
          </button>
          <button id="play-button" onClick={togglePlay}>
            {playing ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={toggleForward}>
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
