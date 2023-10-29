import { createSlice } from "@reduxjs/toolkit";

const cartItem = {
  songName: "",
  packageName: "",
  price: 0,
  imageUrl: "",
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
