import { createSlice, current } from "@reduxjs/toolkit";
import getAllSongs from "../../services/getAllSongs";

const initialState = {
  value: {
    currentPlayingSong: 1,
    playList: [],
  },
};

export const playListSlice = createSlice({
  name: "playList",
  initialState,
  reducers: {
    changePlayList: (state, action) => {
      state.value.playList = action.payload;
    },
    changeSongById: (state, action) => {
      const songId = action.payload;
      state.value.playList.forEach((song, ind) => {
        if (song.id === songId) {
          state.value.currentPlayingSong = ind;
          return;
        }
      });
    },
    stepBackward: (state) => {
      if (state.value.currentPlayingSong > 0) state.value.currentPlayingSong--;
    },
    stepForward: (state) => {
      if (state.value.currentPlayingSong < state.value.playList.length - 1)
        state.value.currentPlayingSong++;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changePlayList, changeSongById, stepBackward, stepForward } =
  playListSlice.actions;

export default playListSlice.reducer;
