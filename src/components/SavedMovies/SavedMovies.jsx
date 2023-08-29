import React from "react";
import "./SavedMovies.css"
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { moviesList } from "../../utils/constants";

function SavedMovies() {
  return (
    <section className="savedMovies">
      <SearchForm />
      <MoviesCardList moviesList={moviesList.slice(0,3)} /> {' '}
    </section>
  );
}

export default SavedMovies;
