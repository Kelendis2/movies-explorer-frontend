import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");
  const [isShortFilm, setIsShortFilm] = useState(false);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleShortFilmToggle = () => {
    setIsShortFilm(!isShortFilm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Вызываем функцию onSearch, передавая в неё текущий запрос и флаг короткометражных фильмов
    onSearch(query, isShortFilm);
  };
  return (
    <div className="serach">
      <form className="serach__form" onSubmit={handleSubmit}>
        <div className="serach__form-item">
          <input
            className="serach__form-input"
            placeholder="Фильм"
            required
            value={query}
            onChange={handleInputChange}
          ></input>
          <button className="serach__form-button" type="submit" />
        </div>
        <div className="serach__filterCheckbox">
        <button
            className={`serach__filterCheckbox-slider ${
              isShortFilm ? "serach__filterCheckbox-slider_on" : ""
            }`}
            type="button"
            onClick={handleShortFilmToggle}
          />
          <span className="serach__filterCheckbox-span">Короткометражки</span>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
