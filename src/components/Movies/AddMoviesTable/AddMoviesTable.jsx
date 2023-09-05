import React from "react";
import "./AddMoviesTable.css";

function AddMoviesTable({ initialVisibleMovies, allMovies }) {

  return (
    <div className="addMoviesTable">
      <button className="addMoviesTable__button" type="button">
        Еще
      </button>
    </div>
  );
}

export default AddMoviesTable;
