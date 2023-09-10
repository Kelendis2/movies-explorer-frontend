import React, { useState, useEffect } from "react";
import "./SavedMovies.css";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies({ movies, onDelete }) {
  useEffect(() => {
    localStorage.setItem("currentPath", "/saved-movies");
  }, []);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isShortFilm, setIsShortFilm] = useState(false);
  useEffect(() => {
    if (movies.length > 0 && searchResults.length === 0) {
      setSearchResults(movies);
    }
  }, [movies]);

  const handleSearch = (newQuery, newIsShortFilm) => {
    setIsShortFilm(newIsShortFilm);

    const filteredMovies = movies.filter((movie) => {
      const includesQuery =
        movie.nameRU.toLowerCase().includes(newQuery.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(newQuery.toLowerCase());

      if (newIsShortFilm) {
        return includesQuery && movie.duration <= 40;
      } else {
        return includesQuery;
      }
    });

    setSearchResults(filteredMovies);
  };
  const filterMovies = (query, isShortFilm) => {
    let filteredMovies = movies;
    if (isShortFilm) {
      filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
    }
    const filteredResults = filteredMovies.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(query.toLowerCase())
      );
    });

    setSearchResults(filteredResults);
  };

  return (
    <main className=" movies movies_saved">
      <SearchForm
        query={query}
        setQuery={setQuery}
        isShortFilm={isShortFilm}
        setIsShortFilm={setIsShortFilm}
        onSearch={handleSearch}
        onFilter={filterMovies}
      />
      <MoviesCardList
        savedMoviesList={searchResults}
        isSavedMoviesPage={true}
        onDelete={onDelete}
      />{" "}
    </main>
  );
}

export default SavedMovies;
