import "./Promo.css";
import React from "react";
import world from "../../../images//world.svg";
import { Link } from "react-scroll";

function Promo() {
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
          <Link className="promo__link" to="about-project" smooth={true}>
            <div className="promo__button">
              Узнать больше
            </div>
          </Link>
        </div>
        <img className="promo__image" alt="Мир из слов" src={world} />
      </div>
    </section>
  );
}

export default Promo;
