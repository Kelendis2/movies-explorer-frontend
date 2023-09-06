import React from "react";
import "./SavedMovies.css"
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";


function SavedMovies() {
  return (
    <main className=" movies movies_saved">
      <SearchForm />
      <MoviesCardList  isSavedMoviesPage={true} /> {' '}
    </main>
  );
}

export default SavedMovies;
