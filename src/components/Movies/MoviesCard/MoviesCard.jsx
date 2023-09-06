import React, { useState } from "react";
import "./MoviesCard.css";


function MoviesCard({movie,isSavedMoviesPage,saveMovie,deleteMovie}) {

  const baseUrl ="https://api.nomoreparties.co/";
  const [isChecked, setIsChecked] = useState(false);
  const imageUrl = isSavedMoviesPage ? movie.image : baseUrl + movie.image.url;

  const handleCheckBoxClick = () => {
    setIsChecked(!isChecked);
  };

  /*const handleSaveDeleteClick = () => {
    if (isSavedMoviesPage) {
      // Если на странице сохраненных фильмов, то удаляем фильм
      deleteMovie(movie);
    } else {
      // Если на странице Movies, то добавляем/удаляем фильм в зависимости от isChecked
      if (isChecked) {
        deleteMovie(movie);
      } else {
        saveMovie(movie);
      }
      handleCheckBoxClick(); // Меняем состояние isChecked
    }
  };*/

  return (
    <li className="movies__card" key={movie.id} >
      <img
        className="movies__card-photo"
        src={imageUrl}
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
            }else{
              deleteMovie(movie);
            }
            handleCheckBoxClick();
          }}

        />
      </div>
    </li>
  );
}

export default MoviesCard;
