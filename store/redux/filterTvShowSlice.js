import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAnimationTvShows,
  getComedyTvShows,
  getCrimeTvShows,
  getDramaTvShows,
} from "../../Api/ApiCall";

const filterTvShowSlice = createSlice({
  name: "tvFilter",
  initialState: {
    // filter states
    animationShow: [],
    comedyShow: [],
    crimeShow: [],
    dramaShow: [],
  },
  reducers: {
    setAnimationShow: (state, action) => {
      state.animationShow = action.payload;
    },
    setComedyShow: (state, action) => {
      state.comedyShow = action.payload;
    },
    setCrimeShow: (state, action) => {
      state.crimeShow = action.payload;
    },
    setDramaShow: (state, action) => {
      state.dramaShow = action.payload;
    },
    clearState: (state) => {
      (state.animationShow = []),
        (state.comedyShow = []),
        (state.crimeShow = []),
        (state.dramaShow = []);
    },
  },
});

export const fetchAnimationShow = createAsyncThunk(
  "tvFilter/fetchAnimationShow",
  async (id, { dispatch }) => {
    try {
      const tvShowDetails = await getAnimationTvShows(id);
      dispatch(setAnimationShow(tvShowDetails));
    } catch (error) {
      console.error("Error fetching tv Show details:", error);
    }
  }
);

export const fetchComedyShow = createAsyncThunk(
  "tvFilter/fetchComedyShow",
  async (id, { dispatch }) => {
    try {
      const tvShowDetails = await getComedyTvShows(id);
      dispatch(setComedyShow(tvShowDetails));
    } catch (error) {
      console.error("Error fetching tv Show details:", error);
    }
  }
);

export const fetchCrimeShow = createAsyncThunk(
  "tvFilter/fetchCrimeShow",
  async (id, { dispatch }) => {
    try {
      const tvShowDetails = await getCrimeTvShows(id);
      dispatch(setCrimeShow(tvShowDetails));
    } catch (error) {
      console.error("Error fetching tv Show details:", error);
    }
  }
);

export const fetchDramaShow = createAsyncThunk(
  "tvFilter/fetchDrama",
  async (id, { dispatch }) => {
    try {
      const tvShowDetails = await getDramaTvShows(id);
      dispatch(setDramaShow(tvShowDetails));
    } catch (error) {
      console.error("Error fetching tv Show details:", error);
    }
  }
);

export const {
  setAnimationShow,
  setComedyShow,
  setCrimeShow,
  setDramaShow,
  clearState,
} = filterTvShowSlice.actions;
export default filterTvShowSlice.reducer;
