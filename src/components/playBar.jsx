import React, { useEffect } from "react";
import { FaPause, FaPlay, FaStepForward, FaStepBackward } from "react-icons/fa";
import "./playBar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changePlayList,
  setPlaying,
  stepBackward,
  stepForward,
  stopPlaying,
} from "../redux/reducers/playList";
import getAllSongs from "../services/getAllSongs";

const useAudio = () => {
  const dispatch = useDispatch();
  const audio = useSelector((state) => state.playList.value.audio);
  const isPlaying = useSelector((state) => state.playList.value.isPlaying);

  useEffect(() => {
    getAllSongs().then((res) => {
      dispatch(changePlayList(res.songs));
    });
  }, []);

  const togglePlay = () => {
    isPlaying ? audio.pause() : audio.play();
    dispatch(setPlaying());
  };
  const toggleBackward = () => {
    if (Math.floor(audio.currentTime) < 1) {
      if (isPlaying) {
        audio.pause();
        dispatch(stopPlaying());
      }
      dispatch(stepBackward());
    } else {
      audio.currentTime = 0;
    }
  };
  const toggleForward = () => {
    if (isPlaying) dispatch(stopPlaying());
    dispatch(stepForward());
  };

  useEffect(() => {
    audio.addEventListener("ended", () => dispatch(stopPlaying()));
    return () => {
      audio.removeEventListener("ended", () => dispatch(stopPlaying()));
    };
  }, []);

  return [isPlaying, togglePlay, toggleBackward, toggleForward];
};

const PlayerBar = () => {
  const [isPlaying, togglePlay, toggleBackward, toggleForward] = useAudio();
  const currentPlayingSong = useSelector(
    (state) => state.playList.value.currentPlayingSong
  );
  const playList = useSelector((state) => state.playList.value.playList);
  const dispatch = useDispatch();

  return playList.length > 0 && currentPlayingSong.name !== undefined ? (
    <div className="player-bar">
      <div className="bottom-space"></div>
      <img src={currentPlayingSong.imageUrl} alt="song-img" />
      <p>{currentPlayingSong.name}</p>
      <div>
        <div>
          <button onClick={toggleBackward}>
            <FaStepBackward />
          </button>
          <button id="play-button" onClick={() => dispatch(togglePlay)}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={toggleForward}>
            <FaStepForward />
          </button>
        </div>
      </div>
      <div>audio bar</div>
      <div>{currentPlayingSong.duration}</div>
      <div>volume bar</div>
    </div>
  ) : (
    <div></div>
  );
};

export default PlayerBar;
