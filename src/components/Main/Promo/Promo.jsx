import "./Promo.css";
import React from "react";
import world from "../../../images//world.svg";

function Promo({ scroll }) {
  return (
    <section className="promo">
      <div className="promo__content">
        <div className="promo__text">
          <h1 className="promo__text-title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__text-subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <button
            className="promo__button"
            to="about-project"
            smooth={true}
            onClick={scroll}
          >
            Узнать больше
          </button>
        </div>
        <img className="promo__image" alt="Мир из слов" src={world} />
      </div>
    </section>
  );
}

export default Promo;
