import React from "react";
import "./NavTab.css";
import { useNavigate } from "react-router-dom";

function NavTab({ showNavTab, closeNavTab }) {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };
  const goToMovies = () => {
    navigate("/movies");
  };

  const goToSavedMovies = () => {
    navigate("/saved-movies");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <nav className="navigate">
      <button
        className="navigate__button-close"
        type="button"
        onClick={closeNavTab}
      />
      <div className="navigate__text-buttons">
        <button className="navigate__button" type="button" onClick={goToMain}>
          Главная
        </button>
        <button
          className="navigate__button navigate__button_active"
          onClick={goToMovies}
          type="button"
        >
          Фильмы
        </button>
        <button
          className="navigate__button"
          type="button"
          onClick={goToSavedMovies}
        >
          Сохраненные фильмы
        </button>
      </div>

      <button
        className="navigate__button-profile"
        type="button"
        onClick={goToProfile}
      />
    </nav>
  );
}

export default NavTab;
