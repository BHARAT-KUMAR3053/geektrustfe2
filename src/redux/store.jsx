import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import colorReducer from "./colorSlice";
import listReducer from "./listSlice";
import queryReducer from "./querySlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    color: colorReducer,
    list: listReducer,
    query: queryReducer,
  },
});
