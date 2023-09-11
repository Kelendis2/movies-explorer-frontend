import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  moviesList,
  isSavedMoviesPage,
  savedMovies,
  savedMoviesList,
  onSave,
  onDelete
}) {


  console.log('мы пришли из локала', moviesList)
  console.log('а мы сохраненые ', savedMoviesList)
  const moviesToRender = isSavedMoviesPage ? savedMoviesList : moviesList;


  return (
    <ul className="movies__list">
      {moviesToRender.map((movie) => {
        return (
          <MoviesCard
            movie={movie}
            key={movie.id ?? movie._id}
            isSavedMoviesPage={isSavedMoviesPage}
            savedMovies={savedMovies}
            onSave={onSave}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
}

export default MoviesCardList;

//
