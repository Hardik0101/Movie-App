import { createSlice } from "@reduxjs/toolkit";
import { getMoviesDetails } from "../../Api/ApiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movieDetails: null,
  },
  reducers: {
    setMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
  },
});

export const fetchMovieDetails = createAsyncThunk(
  "movies/movieDetails/fetchMovieDetails",
  async (id, { dispatch }) => {
    try {
      const movieDetails = await getMoviesDetails(id);
      dispatch(setMovieDetails(movieDetails));
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  }
);

export const { setMovieDetails } = movieSlice.actions;
export default movieSlice.reducer;
