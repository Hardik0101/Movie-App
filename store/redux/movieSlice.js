import { createSlice } from "@reduxjs/toolkit";
import { getMoviesDetails, getPopularMovie } from "../../Api/ApiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movieDetails: null,
    moviesDetailsList: [],
  },
  reducers: {
    setMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    clearState: (state) => {
      state.movieDetails = null;
    },
    setMovieDetailsList: (state, action) => {
      state.moviesDetailsList = action.payload;
    },
  },
});

export const fetchMovieDetails = createAsyncThunk(
  "movieDetails/fetchMovieDetails",
  async (id, { dispatch }) => {
    try {
      const movieDetails = await getMoviesDetails(id);
      dispatch(setMovieDetails(movieDetails));
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  }
);

export const fetchMovieDetailsList = createAsyncThunk(
  "movieDetails/fetchMovieDetails",

  async (id, { dispatch }) => {
    try {
      const moviesDetailsList = await getPopularMovie(id);
      dispatch(setMovieDetailsList(moviesDetailsList));
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  }
);

export const { setMovieDetails, clearState, setMovieDetailsList } =
  movieSlice.actions;
export default movieSlice.reducer;
