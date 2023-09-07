import React from "react";
import "./MoviesCard.css";

function MoviesCard({ movie, isSavedMoviesPage, savedMovies, onSave,onDelete}) {
  const baseUrl = "https://api.nomoreparties.co/";
  const imageUrl = isSavedMoviesPage ? movie.image : baseUrl + movie.image.url;
  const isSaved =
    !isSavedMoviesPage && savedMovies.some((item) => item.movieId === movie.id);
  const movieButtonClassName = `movies__button movies__card-checkBox ${
    isSaved && 'movies__card-checkBox_on'
  }`;

  function handleSaveClick() {
    onSave(movie);
  }

  function handleDeliteClick() {
    onDelete(movie);
  }



  return (
    <li className="movies__card" key={movie.id}>
      <img className="movies__card-photo" src={imageUrl} alt={movie.nameRU} />
      <div className="movies__card-about">
        <div className="movies__card-text">
          <h2 className="movies__card-title">{movie.nameRU}</h2>
          <span className="movies__card-time">{movie.duration}</span>
        </div>
        <button
          className={`movies__button ${
            isSavedMoviesPage ? "movies__card-delete" : movieButtonClassName
          }`}
          type="button"
          onClick={!isSavedMoviesPage ? handleSaveClick : handleDeliteClick}
        />
      </div>
    </li>
  );
}

export default MoviesCard;
