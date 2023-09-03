import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <main className="profileMain">
      <section className="profile">
        <h1 className="profile__title"> Привет, Виталий!</h1>
        <form className="profile__form">
          <div className="profile__form-item" id="profile-item_one">
            <label className="profile__form-label">Имя</label>
            <input
              className="profile__form-input"
              placeholder="Виталий"
              maxLength={20}
              minLength={2}
              type="text"
            ></input>
          </div>
          <div className="profile__form-item ">
            <label className="profile__form-label">E-mail</label>
            <input
              className="profile__form-input"
              placeholder="pochta@yandex.ru"
              maxLength={30}
              minLength={5}
              type="email"
              name="email"
            ></input>
          </div>
          <button className="profile__form-button" type="button">
            Редактировать
          </button>
        </form>
        <button
          className="profile__button-exit"
          id="profile__button-exit"
          type="button"
        >
          Выйти из аккаунта
        </button>
      </section>
    </main>
  );
}

export default Profile;
