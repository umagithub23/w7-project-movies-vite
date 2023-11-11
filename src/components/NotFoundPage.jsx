import { Link } from "react-router-dom";

import backButton from "../assets/back-arrow-button.svg";

export const NotFoundPage = () => {
  return (
    <div>
      <h1>
        Oh Uh, it seems that the page you are trying to access does not exist.
      </h1>
      <Link to="/" className="backLink">
        <img src={backButton} color="white" /> Movies
      </Link>
    </div>
  );
};
