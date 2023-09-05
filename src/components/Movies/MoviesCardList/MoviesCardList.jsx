import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({moviesList, isSavedMoviesPage}) {

  return (
        <ul className="movies__list">
          {moviesList.map((movie) => {
            return (
              <MoviesCard
                movie={movie}
                key={movie.id}
                isSavedMoviesPage={isSavedMoviesPage}
              />
            );
          })}
        </ul>
  );
}

export default MoviesCardList;
