import { configureStore } from "@reduxjs/toolkit";
import playListReducer from "./reducers/playList";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";
// import thunk from "redux-thunk";
import cartRedux from "./reducers/cartRedux";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, cartRedux);

export const store = configureStore({
  reducer: {
    playList: playListReducer,
    cart: cartRedux,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// export const persistor = persistStore(store);
