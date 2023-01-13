import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
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
    deleteFromcart: (state, action) => {
      let newitems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = newitems;
    },
  },
});

export const { addToCart, removeFromCart, deleteFromcart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartItemsWithId = (state, id) =>
  state.cart.items.filter((item) => item.id === id);

export default cartSlice.reducer;
