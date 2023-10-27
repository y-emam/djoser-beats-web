import React, { useState, useEffect } from "react";
import { FaPause, FaPlay, FaStepForward, FaStepBackward } from "react-icons/fa";
import "./playBar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changePlayList,
  stepBackward,
  stepForward,
} from "../redux/reducers/playList";
import getAllSongs from "../services/getAllSongs";

const useAudio = (url) => {
  const playListInd = useSelector(
    (state) => state.playList.value.currentPlayingSong
  );
  const playList = useSelector((state) => state.playList.value.playList);
  const dispatch = useDispatch();
  const [audio, setAudio] = useState(new Audio(url));

  useEffect(() => {
    getAllSongs().then((res) => {
      dispatch(changePlayList(res.songs));
      console.log(playList);

      setAudio(new Audio(playList[playListInd].mp3Url));
    });
  }, []);

  const [playing, setPlaying] = useState(false);

  const togglePlay = () => setPlaying(!playing);
  const toggleBackward = () => {
    if (Math.floor(audio.currentTime) < 1) {
      dispatch(stepBackward());
    } else {
      audio.currentTime = 0;
    }
  };
  const toggleForward = () => {
    dispatch(stepForward());
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
  const playListInd = useSelector(
    (state) => state.playList.value.currentPlayingSong
  );
  const playList = useSelector((state) => state.playList.value.playList);

  return (
    <div className="player-bar">
      <img src={playList[playListInd].imageUrl} alt="song-img" />
      <p>{playList[playListInd].name}</p>
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
      <div>{playList[playListInd].duration}</div>
      <div>volume bar</div>
    </div>
  );
};

export default PlayerBar;
