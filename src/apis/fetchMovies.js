import { fetchData } from "./fetchData";

const API_KEY = "f34087fb7e68eaa1d91ce32c680de1e9";
const BASE_URL = "https://api.themoviedb.org/3/movie";

export const MOVIE_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export const getMovies = async () => {
  const URL = `${BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`;
  return await fetchData(URL);
};

export const getMovieDetails = async (movieId) => {
  const URL = `${BASE_URL}/${movieId}?api_key=${API_KEY}&language=en-US`;
  return await fetchData(URL);
};
