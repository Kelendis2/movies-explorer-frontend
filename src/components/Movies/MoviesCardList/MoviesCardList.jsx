import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { moviesList } from "../../../utils/constants";

function MoviesCardList({ maxVisibleCards }) {
  const visibleMovies = moviesList.slice(0, maxVisibleCards);

  return (
    <section className="moviesCardList">
      {visibleMovies.map((movie) => {
        return <MoviesCard movie={movie} key={movie.movieId} />;
      })}
    </section>
  );
}
export default MoviesCardList;
