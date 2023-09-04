import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";
import student from "../../../images/student.jpg";

function AboutMe() {
  return (
    <section className="about-me section">
      <h2 className="about-me__title section__title">Студент</h2>
      <div className="about-me__student-info">
        <div className="about-me__text-content">
          <h3 className="about-me__subtitle"> Виталий</h3>
          <p className="about-me__student-major">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-me__student-caption">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а еще увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            className="about-me__link-github"

            target="_blank"
            to="https://github.com/Kelendis2"
          >
            Github
          </Link>
        </div>
        <img
          className="about-me__student-photo"
          alt="Фото Студента"
          src={student}
        />
      </div>
    </section>
  );
}

export default AboutMe;
