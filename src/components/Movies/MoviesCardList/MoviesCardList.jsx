import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {

  return (
    <ul className="movies__list">
      {props.movies.map((movie) => {
        return (
          <MoviesCard
            movie={movie}
            key={movie.id}
            isSavedMoviesPage={props.isSavedMoviesPage}
          />
        );
      })}
    </ul>
  );
}
export default MoviesCardList;
