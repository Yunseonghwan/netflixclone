import { selector, atom } from "recoil";
import axios from "axios";

const THDB_KEY = "43d1cb232767ef5c553e1bce9ae70ba2";

export const apiImage = (
  path,
  defaultPoster = "https://images.unsplash.com/photo-1562407680-948253e074d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
) => (path ? `https://image.tmdb.org/t/p/w500${path}` : defaultPoster); //image 받아오는API

export const nowPlayingState = atom({
  key: "nowPlayingState",
  default: [],
});

export const nowPlayingApi = selector({
  key: "nowPlayingApi",
  get: async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${THDB_KEY}`
    );
    const data = res.data.results;
    console.log("dasda", data);

    return data;
  },
});
