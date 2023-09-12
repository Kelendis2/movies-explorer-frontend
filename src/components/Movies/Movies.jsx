import React, { useState, useEffect} from "react";

import "./Movies.css";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies({ movies, savedMovies, onSave, getMovies }) {
  const [searchResults, setSearchResults] = useState(
    JSON.parse(localStorage.getItem("searchResults")) || []
  );
  useEffect(() => {
    localStorage.setItem("currentPath", "/movies");
  }, []);


  const [query, setQuery] = useState(localStorage.getItem("query") || "");

  const hasDataInLocalStorage = localStorage.getItem("searchResults");
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(hasDataInLocalStorage);
  const [visibleCards, setVisibleCards] = useState(getInitialVisibleCards());
  const [isShortFilm, setIsShortFilm] = useState(
    localStorage.getItem("isShortFilm") === "true" || false
  );

  console.log(movies)
  console.log(searchResults)
  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };

  const updateIsShortFilm = (newValue) => {
    setIsShortFilm(newValue);
  };

  useEffect(() => {
    localStorage.setItem("query", query);
  }, [query]);

  useEffect(() => {
    localStorage.setItem("isShortFilm", isShortFilm);
  }, [isShortFilm]);


  function getInitialVisibleCards() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      return 16;
    }
    else if (screenWidth >= 769) {
      return 12;
    }
    else if (screenWidth >= 768) {
      return 8;
    } else {
      return 5;
    }
  }
  const handleShowMoreClick = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
    }
    else if (screenWidth >= 769) {
      setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
    }
     else if (screenWidth >= 768) {
      setVisibleCards((prevVisibleCards) => prevVisibleCards + 2);
    } else {
      setVisibleCards((prevVisibleCards) => prevVisibleCards + 1);
    }
  };
  useEffect(() => {
    function handleResize() {
      setVisibleCards(getInitialVisibleCards());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearch = (query, isShortFilm) => {
    setIsLoading(true);
    getMovies();
    let filteredMovies = movies;
    let searchResults;

    if (isShortFilm) {
      filteredMovies = movies.filter((movie) => movie.duration <= 40);
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
    setHasSearched(true);
    localStorage.setItem("searchResults", JSON.stringify(searchResults));
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return;
  };
  const filterMovies = (query, isShortFilm) => {
    setIsLoading(true);

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
    localStorage.setItem("searchResults", JSON.stringify(filteredResults));

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <main className="movieMain">
      <section className="movies">
        <SearchForm
          query={query}
          setQuery={updateQuery}
          isShortFilm={isShortFilm}
          setIsShortFilm={updateIsShortFilm}
          onSearch={handleSearch}
          onFilter={filterMovies}
        />
        {isLoading ? (
          <Preloader />
        ) : !movies || (hasSearched && searchResults.length === 0) ? (
          <p className="movies__info">Ничего не найдено.</p>
        ) : (
          <MoviesCardList
            moviesList={searchResults.slice(0, visibleCards)}
            isSavedMoviesPage={false}
            savedMovies={savedMovies}
            onSave={onSave}
          />
        )}
        {visibleCards < searchResults.length ? (
          <button
            className="addMoviesTable__button"
            type="button"
            onClick={handleShowMoreClick}
          >
            Еще
          </button>
        ) : null}
      </section>
    </main>
  );
}

export default Movies;
