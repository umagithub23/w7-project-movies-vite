import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getMovieDetails, MOVIE_IMAGE_BASE_URL } from "../../apis/fetchMovies";

import "./Detail.css";

export const Detail = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { movieId } = useParams();

  const getMovieDetail = async (movieId) => {
    setLoading(true);

    try {
      const data = await getMovieDetails(movieId);
      setMovieDetail(data);
    } catch (error) {
      console.log(error);
      setErrorMessage("Error occurred while loading movie details!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setErrorMessage("");
    getMovieDetail(movieId);
  }, [movieId]);

  if (loading) {
    return <h1>Loading in progress...</h1>;
  }

  return (
    <article className="detail-page">
      <Link to="/" className="back-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
          <path
            d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z"
            fill="#fff"
            fillRule="evenodd"
          ></path>
        </svg>{" "}
        Movies
      </Link>
      <div
        className="background"
        style={{
          backgroundImage: `url("${MOVIE_IMAGE_BASE_URL}/w1280${movieDetail.backdrop_path}")`,
        }}
      >
        <div className="summary">
          <img
            src={`${MOVIE_IMAGE_BASE_URL}/w342${movieDetail.poster_path}`}
            alt={movieDetail.title}
          />
          <div className="details">
            <h1>
              <span className="title">{movieDetail.title}</span>
              <span className="rating">
                {movieDetail.vote_average?.toFixed(1)}
              </span>
            </h1>
            <p>{movieDetail.overview}</p>
          </div>
        </div>
      </div>
      {errorMessage && <p className="error"> {errorMessage} </p>}
    </article>
  );
};
