const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjMzMzA4YTJmMGJiMTY0ZTJhZDEwNTE0YWIzMDg2ZiIsIm5iZiI6MTczMDM0NzI3OC4yNzMyMzA2LCJzdWIiOiI2MDJmNmI2YjY0ZjcxNjAwNDA1NjI2MDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FTmLWixxh-8ANyHCvEE5SUx_6l3XvZjBWg0496SrnUc",
  },
};

const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const upComing = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());

export const movieDetail = (id) =>
  fetch(url(`movie/${id}`), options).then((res) => res.json());

export const searchMovie = (keyword) => {
  const searchUrl =
    baseUrl + `search/movie?query=${keyword}&include_adult=true&language=ko-kr`;
  return fetch(searchUrl, options).then((res) => res.json());
};
