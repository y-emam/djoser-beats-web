import React, { useEffect, useState } from "react";
import { FaPause, FaPlay, FaStepForward, FaStepBackward } from "react-icons/fa";
import "./playBar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changePlayList,
  justReferesh,
  seekToSecond,
  setPlaying,
  startPlaying,
  stepBackward,
  stepForward,
  stopPlaying,
} from "../redux/reducers/playList";
import getAllSongs from "../services/getAllSongs";

const useAudio = () => {
  const dispatch = useDispatch();
  const audio = useSelector((state) => state.playList.value.audio);
  const isPlaying = useSelector((state) => state.playList.value.isPlaying);
  const currentPlayingSongId = useSelector(
    (state) => state.playList.value.currentPlayingSongId
  );

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
      if (isPlaying) dispatch(stopPlaying());
      dispatch(stepBackward());
      dispatch(startPlaying());
    } else {
      audio.currentTime = 0;
    }
  };
  const toggleForward = () => {
    if (isPlaying) dispatch(stopPlaying());
    dispatch(stepForward());
    dispatch(startPlaying());
  };

  useEffect(() => {
    audio.addEventListener("ended", () => {
      console.log("currentPlayingid" + currentPlayingSongId);
      toggleForward();
    });
    return () => {
      audio.removeEventListener("ended", () => dispatch(stopPlaying()));
    };
  }, []);

  return [isPlaying, togglePlay, toggleBackward, toggleForward];
};

const PlayerBar = () => {
  const playList = useSelector((state) => state.playList.value.playList);
  const audio = useSelector((state) => state.playList.value.audio);
  const currentPlayingSong = useSelector(
    (state) => state.playList.value.currentPlayingSong
  );

  const [isPlaying, togglePlay, toggleBackward, toggleForward] = useAudio();

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      document.getElementById("audio-seeker").value = audio.currentTime;
      document.getElementById("audio-duration").textContent = `${Math.floor(
        audio.currentTime / 60
      )}:${
        Math.floor(audio.currentTime % 60) < 10
          ? "0" + Math.floor(audio.currentTime)
          : Math.floor(audio.currentTime % 60)
      } | ${currentPlayingSong.duration}`;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return playList.length > 0 && currentPlayingSong.name !== undefined ? (
    <div>
      <div className="bottom-space"></div>
      <div className="player-bar">
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
        <div className="audio-bar">
          <input
            id="audio-seeker"
            type="range"
            min={0}
            max={audio.duration}
            value={audio.currentTime}
            onChange={(e) => {
              dispatch(seekToSecond(e.target.value));
            }}
          />
        </div>
        <div id="audio-duration"></div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default PlayerBar;
