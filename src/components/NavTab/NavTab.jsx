import React from "react";
import "./NavTab.css"
import { useNavigate } from "react-router-dom";

function NavTab() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };
  const goToMovies = ()=>{
    navigate("/movies");
  }

  const goToSavedMovies = ()=>{
    navigate("/saved-movies");
  }

  const goToProfile = ()=>{
    navigate("/profile");
  }

  return <nav className="navigate">
    <button className="navigate__button-close" />
    <div className="navigate__text-buttons">
    <button className="navigate__button" onClick={goToMain()}>
      Главная
    </button>
    <button className="navigate__button navigate__button_active" onClick={goToMovies()}>
      Фильмы
    </button>
    <button className="navigate__button" onClick={goToSavedMovies()}>
      Сохраненные фильмы
    </button>
    </div>

    <button className="navigate__button-profile" onClick={goToProfile} />
  </nav>;
}

export default NavTab;
