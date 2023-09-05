import React from "react";
import "./MoviesCard.css";


function MoviesCard(props) {

  const { movie } = props;
  const baseUrl ="https://api.nomoreparties.co/";
  return (
    <li className="movies__card">
      <img
        className="movies__card-photo"
        src={baseUrl + movie.image.url}
        alt={movie.nameRU}
      />
      <div className="movies__card-about">
        <div className="movies__card-text">
          <h2 className="movies__card-title">{movie.nameRU}</h2>
          <span className="movies__card-time">{movie.duration}</span>
        </div>
        <button
          className={`movies__button ${
            props.isSavedMoviesPage ? "movies__card-delete" : "movies__card-checkBox"
          }`}
          type="button"
        />
      </div>
    </li>
  );
}

export default MoviesCard;
