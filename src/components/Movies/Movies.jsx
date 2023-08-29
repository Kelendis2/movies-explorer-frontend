import React from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import AddMoviesTable from "./AddMoviesTable/AddMoviesTable";
import { moviesList } from "../../utils/constants";


function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList moviesList={moviesList} />
      <AddMoviesTable />
    </section>
  );
}

export default Movies;
