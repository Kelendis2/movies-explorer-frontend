import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__navigation">
        <p className="foter__caption"> © 2023</p>
        <div className="footer__links">
          <Link
            className="footer__link"
            type="link"
            to="https://practicum.yandex.ru/"
          >
            Яндекс.Практикум
          </Link>
          <Link
            className="footer__link"
            type="link"
            to="https://github.com/Kelendis2"
          >
            Github
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
