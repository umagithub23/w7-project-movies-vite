import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getMovies, MOVIE_IMAGE_BASE_URL } from "../../apis/fetchMovies";

import "./PopularList.css";

export const PopularList = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getMovieList = async () => {
    setLoading(true);

    try {
      const data = await getMovies();
      setMovieList(data.results);
    } catch (error) {
      console.log(error);
      setErrorMessage("Error occurred while loading movies!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  if (loading) {
    return <h1>Loading in progress...</h1>;
  }

  return (
    <div className="popular-list-page">
      {movieList.map((movie) => {
        return (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            className="popular-movie"
          >
            <img
              src={`${MOVIE_IMAGE_BASE_URL}/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="details">
              <h1>{movie.title}</h1>
              <p>{`Released ${movie.release_date}`}</p>
            </div>
          </Link>
        );
      })}
      {errorMessage && <p className="error"> {errorMessage} </p>}
    </div>
  );
};
