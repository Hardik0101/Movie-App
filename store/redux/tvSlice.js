import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTvShowDetails } from "../../Api/ApiCall";

const tvSlice = createSlice({
  name: "tvShowDetails",
  initialState: {
    tvShowDetails: null,
  },
  reducers: {
    setTvDetails: (state, action) => {
      state.tvShowDetails = action.payload;
    },
    clearState: (state) => {
      state.tvShowDetails = null;
    },
  },
});

export const fetchTvShowDetails = createAsyncThunk(
  "tvShowDetails/fetchTvShowDetails",
  async (id, { dispatch }) => {
    try {
      const tvShowDetails = await getTvShowDetails(id);
      dispatch(setTvDetails(tvShowDetails));
    } catch (error) {
      console.error("Error fetching Tv Show details:", error);
    }
  }
);

export const { setTvDetails, clearState } = tvSlice.actions;
export default tvSlice.reducer;
