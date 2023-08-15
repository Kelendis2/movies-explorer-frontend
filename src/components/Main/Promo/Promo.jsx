import "./Promo.css"
import React from "react";
import world from "../../../images/world.svg";

function Promo (){
  return(
    <section className="promo">
    <div className="promo__text">
      <h1 className="promo__text-title">Учебный проект студента факультета <br /> Веб-разработки.</h1>
      <p className="promo__text-subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <button className="promo__button" type="button">Узнать больше</button>
    </div>
    <img className="promo__image" alt="world" src={world} />


  </section>
  )

}

export default Promo;
