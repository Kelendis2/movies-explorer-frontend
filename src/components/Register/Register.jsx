import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <main className="register">
      <form className="register__form" id="form">
        <label className="register__form-label " id="form_label">
          {" "}
          Имя{" "}
        </label>
        <input
          className="register__form-input form__input"
          id="form_input"
          placeholder="Виталий"
          maxLength={20}
          minLength={2}
          type="text"
          required
        ></input>

        <label className="register__form-label " id="form_label">
          E-mail
        </label>
        <input
          className="register__form-input "
          id="form_input"
          placeholder="pochta@yandex.ru"
          maxLength={30}
          minLength={5}
          type="email"
          name="email"
          required
        ></input>

        <label className="register__form-label " id="form_label">
          Пароль
        </label>
        <input
          className="register__form-input "
          id="form_input"
          placeholder="••••••••••••••"
          maxLength={12}
          minLength={8}
          type="password"
          name="password"
          required
        ></input>

        <span
          className="register__form-span-error "
          id="form_span-error"
        ></span>
        <button
          className="register__form-button "
          id="form_button"
          type="button"
        >
          Зарегестрироваться
        </button>
        <span className="register__form-span-link " id="form_span-link">
          Уже зарегистрированны?
          <Link
            className="register__form-link "
            id="form_link"
            type="link"
            to="/signin"
          >
            Войти
          </Link>
        </span>
      </form>
    </main>
  );
}

export default Register;
