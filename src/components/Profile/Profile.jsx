import React from "react";
import "./Profile.css";

function Profile (){
  return(
    <section className="profile">
      <h2 className="profile__title"> Привет Виталий!</h2>
      <form className="profile__form">
        <div className="profile__form__item">
        <label className="profile__form_label">Имя</label>
        <input className="profile__form_input" placeholder="Виталий"></input>
        </div>
        <div className="profile__form__item">
        <label className="profile__form_label">E-mail</label>
        <input className="profile__form_input" placeholder="pochta@yandex.ru"></input>
        </div>
        <button className="profile__form_button" type="button">Редактировать</button>
      </form>
      <button className="profile__button-exit" type="button">Выйти из аккаунта</button>
    </section>
  )
}

export default Profile;
