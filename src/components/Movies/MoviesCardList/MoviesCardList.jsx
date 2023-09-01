import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

  return (
    <section className="moviesCardList">
      {props.moviesList.map((movie) => {
        return (
          <MoviesCard
            movie={movie}
            key={movie.movieId}
            isSavedMoviesPage={props.isSavedMoviesPage}
          />
        );
      })}
    </section>
  );
}
export default MoviesCardList;
