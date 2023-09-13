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
          <h3 className="about-me__subtitle"> Карина</h3>
          <p className="about-me__student-major">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-me__student-caption">
            Я родилась в Калининграде, закончил факультет экономики КГТУ. Раньше
            я работал в сфере информационных технологий, но на другой должности,
            я занимался управлением филлиала компании по обучению
            программированию и маркетингом. Меня всегда восхищали наши студенты
            которые меняли сферу деятельности и пробовали развиваться в it.
            Разработка меня очень интересовала и привлекала и тогда я подумала:
            "А почему бы и нет?". После чего в ноябре 2022 года я решила сменить
            сферу деятельности и начала развиваться во front-end разработке. А
            это мой финальный проект курса. И я думаю у меня все получилось.
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
