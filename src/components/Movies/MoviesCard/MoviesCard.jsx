import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  const { movie } = props;
  return (
    <div className="moviesCard">
      <img className="moviesCard__photo" src={movie.image} alt={movie.name} />
      <div className="moviesCard__about">
        <div className="moviesCard__about_text-content">
          <h2 className="moviesCard__about_text-content_type_name">
            {movie.nameRU}
          </h2>
          <span className="moviesCard__about_text-content_type_time">
            {movie.duration}
          </span>
        </div>
        <button className="moviesCard__about_checkBox"></button>
      </div>
    </div>
  );
}

export default MoviesCard;
