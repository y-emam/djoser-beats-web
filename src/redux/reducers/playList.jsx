import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    currentPlayingSong: {},
    currentPlayingSongInd: -1,
    audio: new Audio(),
    playList: [],
    isPlaying: false,
    currentTime: 0,
  },
};

export const playListSlice = createSlice({
  name: "playList",
  initialState,
  reducers: {
    changePlayList: (state, action) => {
      state.value.playList = action.payload;
      state.value.currentTime = 0;
    },
    setPlaying: (state) => {
      state.value.isPlaying = !state.value.isPlaying;
    },
    stopPlaying: (state) => {
      state.value.isPlaying = false;
      state.value.audio.pause();
    },
    startPlaying: (state) => {
      state.value.isPlaying = true;
      state.value.audio.play();
    },
    changeSong: (state, action) => {
      const songInp = action.payload;

      // check if it is the currently song or not
      if (songInp._id !== state.value.currentPlayingSong._id) {
        state.value.playList.forEach((song, ind) => {
          if (song._id === songInp._id) {
            state.value.currentPlayingSong = songInp;
            state.value.currentPlayingSongInd = ind;
            console.log(state.value.currentPlayingSongInd);
            state.value.audio.src = state.value.currentPlayingSong.mp3Url;
            state.value.currentTime = 0;
            return;
          }
        });
      }
    },
    stepBackward: (state) => {
      if (state.value.currentPlayingSongInd > 0) {
        state.value.currentPlayingSong =
          state.value.playList[--state.value.currentPlayingSongInd];

        state.value.isPlaying = true;
        state.value.audio.src = state.value.currentPlayingSong.mp3Url;
        state.value.currentTime = 0;
      }
    },
    stepForward: (state) => {
      if (state.value.currentPlayingSongInd < state.value.playList.length - 1) {
        state.value.currentPlayingSong =
          state.value.playList[++state.value.currentPlayingSongInd];

        state.value.isPlaying = true;
        state.value.audio.src = state.value.currentPlayingSong.mp3Url;
        state.value.currentTime = 0;
      }
    },
    seekToSecond: (state, action) => {
      const timeInp = action.payload;

      state.value.audio.currentTime = timeInp;
    },
    justReferesh: (state) => {
      state.value.audio.currentTime = state.value.audio.currentTime;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changePlayList,
  changeSong,
  stepBackward,
  stepForward,
  setPlaying,
  startPlaying,
  stopPlaying,
  seekToSecond,
  justReferesh,
} = playListSlice.actions;

export default playListSlice.reducer;
