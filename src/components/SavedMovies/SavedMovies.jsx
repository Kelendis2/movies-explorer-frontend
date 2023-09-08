import React, { useState } from "react";
import "./SavedMovies.css";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies({ movies, onDelete }) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isShortFilm, setIsShortFilm] = useState(false);
  console.log(movies);
  return (
    <main className=" movies movies_saved">
      <SearchForm
        query={query}
        setQuery={setQuery}
        isShortFilm={isShortFilm}
        setIsShortFilm={setIsShortFilm}
        onSearch={() => {}}
      />
      <MoviesCardList
        savedMoviesList={movies}
        isSavedMoviesPage={true}
        onDelete={onDelete}
      />{" "}
    </main>
  );
}

export default SavedMovies;
