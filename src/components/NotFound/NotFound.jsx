import React from "react";
import "./NotFound.css";
import notFound from "../../images/404.svg";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <section className="notFound">
      <img className="notFound__img" alt="404" src={notFound} />
      <h2 className="notFound__title">Страница не найдена</h2>

      <button className="notFound__button" type="button" onClick={goBack}>
        Назад
      </button>
    </section>
  );
}

export default NotFound;
