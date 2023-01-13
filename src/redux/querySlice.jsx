import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    addToQuery: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { addToQuery } = querySlice.actions;

export default querySlice.reducer;
