import React from "react";
import "./AboutProject.css"

function AboutProject (){
  return(
    <section className="about-project">
      <h2 className="about-project__title section__title">О проекте</h2>
      <ul className="about-project__tablel">
        <li className="tablel__item">
          <h2 className="tablel__item_title">Дипломный проект включал 5 этапов</h2>
          <p className="table__item_text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="tablel__item">
          <h2 className="tablel__item_title">На выполнение диплома ушло 5 недель</h2>
          <p className="table__item_text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="about-project__line">
        <p className="about-project__week-one">1 неделя</p>
        <p className="about-project__week-four">4 недели</p>
      </div>
      <p className="about-project__line-captions">
      <p  className="about-project__line-caption">Back-end</p>
      <div className="about-project__line-caption">Front-end</div>
      </p>


    </section>
  )
};


export default AboutProject;
