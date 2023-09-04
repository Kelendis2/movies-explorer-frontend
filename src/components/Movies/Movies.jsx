import React from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import AddMoviesTable from "./AddMoviesTable/AddMoviesTable";
import { moviesList } from "../../utils/constants";

function Movies() {
  return (
    <main className="movieMain">
      <section className="movies">
      <SearchForm />
      <MoviesCardList moviesList={moviesList} isSavedMoviesPage={false} />
      <AddMoviesTable />
    </section>
    </main>

  );
}

export default Movies;
