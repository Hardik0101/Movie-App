import axios from "axios";
const API_KEY_POPULAR_MOVIE =
  "https://api.themoviedb.org/3/movie/popular?api_key=df4e888c43bec24422bfa0f9a44e5747";

const API_KEY_POPULAR_TV =
  "https://api.themoviedb.org/3/tv/popular?api_key=df4e888c43bec24422bfa0f9a44e5747";

const API_M_UPCOMING =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=df4e888c43bec24422bfa0f9a44e5747";

const API_TV_TODAY =
  "https://api.themoviedb.org/3/tv/airing_today?api_key=df4e888c43bec24422bfa0f9a44e5747";

export async function getPopularMovie() {
  try {
    const response = await axios.get(API_KEY_POPULAR_MOVIE);
    const data = await response.json();
    return data.results.slice(0, 10);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPopularTvData() {
  try {
    const response = await axios.get(API_KEY_POPULAR_TV);
    const data = await response.json();
    return data.results.slice(0, 10);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUpcomingMovie() {
  try {
    const response = await axios.get(API_M_UPCOMING);
    const data = await response.json();
    return data.results.slice(0, 10);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAiringToday() {
  try {
    const response = await axios.get(API_TV_TODAY);
    const data = await response.json();
    return data.results.slice(0, 10);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
