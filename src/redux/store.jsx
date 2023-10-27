import { configureStore } from "@reduxjs/toolkit";
import playListReducer from "./reducers/playList";

export const store = configureStore({
  reducer: {
    playList: playListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
