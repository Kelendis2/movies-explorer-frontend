import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({moviesList, isSavedMoviesPage,saveMovie, deleteMovie}) {

  return (
        <ul className="movies__list">
          {moviesList.map((movie) => {
            return (
              <MoviesCard
                movie={movie}
                key={movie.id}
                isSavedMoviesPage={isSavedMoviesPage}
                saveMovie={saveMovie}
                deleteMovie={deleteMovie}
              />
            );
          })}
        </ul>
  );
}

export default MoviesCardList;
