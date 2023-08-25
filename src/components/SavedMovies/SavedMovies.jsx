import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { moviesList } from "../../utils/constants";

function SavedMovies() {
  return (
    <section className="savedMovies">
      <SearchForm />
      <MoviesCardList maxVisibleCards={3} /> {/* Отобразить 3 карточки */}
    </section>
  );
}

export default SavedMovies;
