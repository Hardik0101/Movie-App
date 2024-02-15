import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import tvReducer from "./tvSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    tvShow: tvReducer,
  },
});
