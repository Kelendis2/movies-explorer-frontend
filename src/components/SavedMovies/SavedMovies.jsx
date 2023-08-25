import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { moviesList } from "../../utils/constants";

function SavedMovies() {
  const threeMovies = moviesList.slice(0, 3); // Создаем подмассив из первых трех фильмов

  return (
    <section className="savedMovies">
      <SearchForm />
      <MoviesCardList movies={threeMovies} />{" "}
      {/* Передаем подмассив в MoviesCardList */}
    </section>
  );
}

export default SavedMovies;
