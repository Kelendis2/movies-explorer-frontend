import React from "react";
import "./SavedMovies.css";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies({movies,deleteMovie}) {
  console.log(movies);
  return (
    <main className=" movies movies_saved">
      <SearchForm />
      <MoviesCardList
        savedMoviesList={movies}
        isSavedMoviesPage={true}
        deleteMovie={deleteMovie}
      />{" "}
    </main>
  );
}

export default SavedMovies;
