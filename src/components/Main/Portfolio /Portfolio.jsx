import React from "react";
import "./Portfolio.css"
import strelka from "../../../images/strelka.svg";
import { Link } from "react-router-dom";
function Portfolio (){
  return (
    <section className="portfolio">
    <h4 className="portfolio__title">Портфолио</h4>
    <Link
      className="portfolio__link"
      type="link"
      to="https://github.com/Kelendis2/how-to-learn"
    >
      <p className="portfolio-link__text">Статичный сайт</p>
      <div
        className="about-me__portfolio-link_image"
      />
    </Link>
    <Link
      className="portfolio__link"
      type="link"
      to="https://github.com/Kelendis2/russian-travel"
    >
      <p className="portfolio-link__text">Адаптивный сайт</p>

      <div
        className="about-me__portfolio-link_image"
      />
    </Link>
    <Link
      className="portfolio__link"
      type="link"
      to="https://github.com/Kelendis2/react-mesto-api-full-gha"
    >
      <p className="portfolio-link__text">Одностраничное приложение</p>
      <div
        className="about-me__portfolio-link_image"
      />
    </Link>
  </section>
  )
}

export default Portfolio;
