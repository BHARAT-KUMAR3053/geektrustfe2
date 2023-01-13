import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  newitems: [],
};

export const cartSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.items = action.payload;
    },
    addToNewList: (state, action) => {
      state.newitems = action.payload;
    },
    removeFromNewList: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newItems = [...state.items];
      if (index >= 0) {
        newItems.splice(index, 1);
      } else {
        console.warn("cant remove product from cart");
      }
      state.items = newItems;
    },
  },
});

export const { addToList, removeFromList, addToNewList } = cartSlice.actions;

export default cartSlice.reducer;
