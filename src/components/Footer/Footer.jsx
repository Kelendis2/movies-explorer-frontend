import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__navigation">
        <p className="footer__caption"> © 2023</p>
        <div className="footer__links">
          <Link
            className="footer__link"
            type="link"
            target="_blank"
            to="https://practicum.yandex.ru/"
          >
            Яндекс.Практикум
          </Link>
          <Link
            className="footer__link"
            type="link"
            target="_blank"
            to="https://github.com/Kelendis2"
          >
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
