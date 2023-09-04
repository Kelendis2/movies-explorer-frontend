import "./Techs.css";
import React from "react";

function Techs() {
  return (
    <section className="techs section">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__subtitle section__subtitle"> 7 технологий</h3>
      <p className="techs__caption section__caption">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__table">
        <li className="techs__table-item">HTML</li>
        <li className="techs__table-item">CSS</li>
        <li className="techs__table-item">JS</li>
        <li className="techs__table-item">React</li>
        <li className="techs__table-item">Git</li>
        <li className="techs__table-item">Express.js</li>
        <li className="techs__table-item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
