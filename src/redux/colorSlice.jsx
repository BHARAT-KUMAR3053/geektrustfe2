import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterItems: [],
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    addToFilter: (state, action) => {
      state.filterItems = [...state.filterItems, action.payload];
    },
    removeFromFilter: (state, action) => {
      state.filterItems = state.filterItems.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const { addToFilter, removeFromFilter } = colorSlice.actions;

export const selectFilterItems = (state) => state.color.filterItems;

export default colorSlice.reducer;
