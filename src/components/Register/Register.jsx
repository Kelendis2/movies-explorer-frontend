import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <main className="signup">
      <section className="register">
        <form className="register__form form">
          <label className="register__form-label form__label"> Имя </label>
          <input
            className="register__form-input form__input"
            placeholder="Виталий"
            maxLength={20}
            minLength={2}
            type="text"
            required
          ></input>

          <label className="register__form-label form__label ">E-mail</label>
          <input
            className="register__form-input form__input"
            placeholder="pochta@yandex.ru"
            maxLength={30}
            minLength={5}
            type="email"
            name="email"
            required
          ></input>

          <label className="register__form-label form__label">Пароль</label>
          <input
            className="register__form-input form__input"
            placeholder="••••••••••••••"
            maxLength={12}
            minLength={8}
            type="password"
            name="password"
            required
          ></input>

          <span className="register__form-span-error form__span-error"></span>
          <button className="register__form-button form__button" type="button">
            Зарегестрироваться
          </button>
          <span className="register__form-span-link form__span-link">
            Уже зарегистрированны?
            <Link className="register__form-link form__link" to="/signin">
              Войти
            </Link>
          </span>
        </form>
      </section>
    </main>
  );
}

export default Register;
