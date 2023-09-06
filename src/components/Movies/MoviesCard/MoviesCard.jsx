import React, { useState } from "react";
import "./MoviesCard.css";


function MoviesCard({movie,isSavedMoviesPage,saveMovie,deleteMovie}) {

  const baseUrl ="https://api.nomoreparties.co/";
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxClick = () => {
    setIsChecked(!isChecked);
  };
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
            isSavedMoviesPage ? "movies__card-delete" : isChecked
            ? "movies__card-checkBox_on"
            : "movies__card-checkBox"
          }`}
          type="button"
          onClick={() => {
            if (!isSavedMoviesPage) {
              saveMovie(movie);
            }
            handleCheckBoxClick();
          }}

        />
      </div>
    </li>
  );
}

export default MoviesCard;
