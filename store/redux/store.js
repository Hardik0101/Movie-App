import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import tvReducer from "./tvSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    tvShow: tvReducer,
  },
});

// const logData = () => {
//   const state = store.getState();
//   console.log("Movies:", state.movies);
//   console.log("TV Shows:", state.tvShow);
// };
// store.subscribe(logData);
// logData();
