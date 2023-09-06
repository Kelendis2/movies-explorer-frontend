import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({moviesList, isSavedMoviesPage,saveMovie, deleteMovie, savedMoviesList}) {

  const moviesToRender = isSavedMoviesPage ? savedMoviesList : moviesList;

  return (
        <ul className="movies__list">
          {moviesToRender.map((movie) => {
            return (
              <MoviesCard
                movie={movie}
                key={movie.id ?? movie._id}
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


//
