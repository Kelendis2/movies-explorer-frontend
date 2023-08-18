import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCard from "../Movies/MoviesCard/MoviesCard";




function SavedMovies(movie){
  return(
    <section className="savedMovies ">
      <SearchForm />
    </section>
  )

}

export default SavedMovies;
