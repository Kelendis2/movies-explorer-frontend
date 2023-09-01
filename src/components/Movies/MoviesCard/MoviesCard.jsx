import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  const { movie } = props;
  return (
    <div className="movies__card">
      <img className="movies__card-photo" src={movie.image} alt={movie.nameRU} />
      <div className="movies__card-about">
        <div className="movies__card-text">
          <h2 className="movies__card-title">
            {movie.nameRU}
          </h2>
          <span className="movies__card-time">
            {movie.duration}
          </span>
        </div>
        <button className="movies__card-checkBox"></button>
      </div>
    </div>
  );
}

export default MoviesCard;
