import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    currentPlayingSong: {},
    currentPlayingSongInd: -1,
    audio: new Audio(),
    playList: [],
    isPlaying: false,
  },
};

export const playListSlice = createSlice({
  name: "playList",
  initialState,
  reducers: {
    changePlayList: (state, action) => {
      state.value.playList = action.payload;
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
      state.value.playList.forEach((song, ind) => {
        if (song._id === songInp._id) {
          state.value.currentPlayingSong = songInp;
          state.value.currentPlayingSongInd = ind;

          state.value.audio.src = state.value.currentPlayingSong.mp3Url;
          return;
        }
      });
    },
    stepBackward: (state) => {
      if (state.value.currentPlayingSongInd > 0) {
        state.value.currentPlayingSong =
          state.value.playList[--state.value.currentPlayingSongInd];

        state.value.isPlaying = true;
        state.value.audio.src = state.value.currentPlayingSong.mp3Url;
      }
    },
    stepForward: (state) => {
      console.log(state.value.currentPlayingSongInd);
      console.log(state.value.playList.length - 1);
      if (state.value.currentPlayingSongInd < state.value.playList.length - 1) {
        state.value.currentPlayingSong =
          state.value.playList[++state.value.currentPlayingSongInd];

        state.value.isPlaying = true;
        state.value.audio.src = state.value.currentPlayingSong.mp3Url;
      }
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
} = playListSlice.actions;

export default playListSlice.reducer;
