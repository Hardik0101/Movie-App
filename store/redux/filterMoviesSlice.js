import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getActionMovies,
  getComedyMovies,
  getRomanticMovies,
  getThrillerMovies,
} from "../../Api/ApiCall";

const filterMovieSlice = createSlice({
  name: "moviesFilter",
  initialState: {
    // filter states
    actionMovies: [],
    romanticMovies: [],
    thrillerMovies: [],
    comedyMovies: [],
  },
  reducers: {
    setActionMovies: (state, action) => {
      state.actionMovies = action.payload;
    },
    setRomanticMovies: (state, action) => {
      state.romanticMovies = action.payload;
    },
    setThrillerMovies: (state, action) => {
      state.thrillerMovies = action.payload;
    },
    setComedyMovies: (state, action) => {
      state.comedyMovies = action.payload;
    },
    clearState: (state) => {
      state.actionMovies = [];
      state.romanticMovies = [];
      state.thrillerMovies = [];
      state.comedyMovies = [];
    },
  },
});

export const fetchActionMovies = createAsyncThunk(
  "moviesFilter/fetchActionMovies",
  async (id, { dispatch }) => {
    try {
      const moviesDetailsList = await getActionMovies(id);
      dispatch(setActionMovies(moviesDetailsList));
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  }
);

export const fetchRomanticMovies = createAsyncThunk(
  "moviesFilter/fetchRomanticMovies",

  async (id, { dispatch }) => {
    try {
      const moviesDetailsList = await getRomanticMovies(id);
      dispatch(setRomanticMovies(moviesDetailsList));
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  }
);

export const fetchThrillerMovies = createAsyncThunk(
  "moviesFilter/fetchThrillerMovies",

  async (id, { dispatch }) => {
    try {
      const moviesDetailsList = await getThrillerMovies(id);
      dispatch(setThrillerMovies(moviesDetailsList));
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  }
);
export const fetchComedyMovies = createAsyncThunk(
  "moviesFilter/fetchComedyMovies",

  async (id, { dispatch }) => {
    try {
      const moviesDetailsList = await getComedyMovies(id);
      dispatch(setComedyMovies(moviesDetailsList));
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  }
);

export const {
  setActionMovies,
  setComedyMovies,
  setRomanticMovies,
  setThrillerMovies,
  clearState,
} = filterMovieSlice.actions;
export default filterMovieSlice.reducer;
