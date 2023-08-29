import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  //const visibleMovies = moviesList.slice(0, props.maxVisibleCards);

  return (
    <section className="moviesCardList">
      {props.moviesList.map((movie) => {
        return <MoviesCard movie={movie} key={movie.movieId} />;
      })}
    </section>
  );
}
export default MoviesCardList;
