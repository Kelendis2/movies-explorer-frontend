import React, { useState, useEffect } from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import AddMoviesTable from "./AddMoviesTable/AddMoviesTable";

function Movies({ movies }) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(movies);

  const handleSearch = (query, isShortFilm) => {
    setIsLoading(true);

    let filteredMovies = movies;
    let searchResults;

    // Если isShortFilm равен true, фильтруем только короткометражные фильмы
    if (isShortFilm) {
      filteredMovies = movies.filter((movie) => movie.duration <= 40); // Пример: фильмы короче 40 минут
      searchResults = filteredMovies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(query.toLowerCase())
        );
      });
    } else {
      searchResults = movies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(query.toLowerCase())
        );
      });
    }

    setSearchResults(searchResults);
    setIsLoading(false);
    console.log(searchResults);
    return;
  };

  return (
    <main className="movieMain">
      <section className="movies">
        <SearchForm query={query} setQuery={setQuery} onSearch={handleSearch} />
        {isLoading ? (
          <p className="movies__loading">Загрузка...</p>
        ) : !movies || searchResults.length === 0 ? (
          // Выводите сообщение или компонент заглушку, если данных нет или они пусты
          <p className="movies__info">Нет доступных фильмов.</p>
        ) : (
          <MoviesCardList
            moviesList={searchResults}
            isSavedMoviesPage={false}
          />
        )}
        <AddMoviesTable />
      </section>
    </main>
  );
}

export default Movies;
