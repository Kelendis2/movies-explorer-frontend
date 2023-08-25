import React from "react";
import "./MoviesCard.css";

function MoviesCard(props) {
  const { movie } = props;
  return (
    <section className="moviesCard">
      <img className="moviesCard__photo" src={movie.image} alt={movie.name} />
      <div className="moviesCard__about">
        <div className="moviesCard__about_text-content">
          <span className="moviesCard__about_text-content_type_name">
            {movie.nameRU}
          </span>
          <span className="moviesCard__about_text-content_type_time">
            {movie.duration}
          </span>
        </div>
        <div className="moviesCard__about_checkBox"></div>
      </div>
    </section>
  );
}

export default MoviesCard;
