import React from "react";
import "./SearchForm.css";

function SearchForm({
  query,
  setQuery,
  isShortFilm,
  setIsShortFilm,
  onSearch,
  onFilter,
}) {

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleShortFilmToggle = () => {
    setIsShortFilm(!isShortFilm);
    onFilter(query, !isShortFilm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSearch(query, isShortFilm);
  };
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
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
            onKeyDown={handleInputKeyDown}
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
