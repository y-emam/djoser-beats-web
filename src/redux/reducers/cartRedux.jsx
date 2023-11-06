import { createSlice } from "@reduxjs/toolkit";

const cartItem = {
  songName: "",
  packageName: "",
  price: 0,
  imageUrl: "",
  parentFolderUrl: "",
};

const initialState = {
  value: {
    items: [],
  },
};

export const cartRedux = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      for (let i = 0; i < state.value.items.length; i++) {
        if (action.payload.songName === state.value.items[i].songName) {
          return;
        }
      }

      state.value.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const packageItem = action.payload;
      state.value.items = state.value.items.filter(
        (item) =>
          !(
            item.songName === packageItem.songName &&
            item.packageName === packageItem.packageName
          )
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartRedux.actions;

export default cartRedux.reducer;
