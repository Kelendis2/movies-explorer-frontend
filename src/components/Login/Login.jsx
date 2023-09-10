import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login({ handleLogin, errorMessage, isLoading }) {
  const navigate = useNavigate();
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });
  const { email, password } = formValue;
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormEmpty, setIsFormEmpty] = useState(true);


  const goToRegistration = () => {
    navigate("/signup");
  };
  useEffect(() => {
    const isInputValid = () => {
      const isEmailValid = /^\S+@\S+\.\S+$/.test(email.trim());
      const isPasswordValid = password.trim().length >= 8;

      return isEmailValid && isPasswordValid;
    };

    setIsFormValid(isInputValid());
    setIsFormEmpty(email.trim() === "" || password.trim() === "");
  }, [email, password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
  };

  return (
    <main className="signin">
      <section className="login">
        <form className="login__form form" onSubmit={handleSubmit} noValidate>
          <label className="login__form-label form__label">E-mail</label>
          <input
            className="login__form-input form__input"
            placeholder="pochta@yandex.ru"
            maxLength={30}
            minLength={5}
            onChange={handleChange}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            required
          ></input>
          <label className="login__form-label form__label">Пароль</label>
          <input
            className="login__form-input form__input"
            placeholder="••••••••••••••"
            maxLength={12}
            minLength={8}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={handleChange}
            required
          ></input>
          <span className="login__form-span-error form__error">
            {errorMessage}
          </span>
          <button
            className={`login__form-button form__button ${
              isLoading || isFormEmpty || !isFormValid ? "form__button-disable" : ""
            }`}
            type="submit"
            disabled={isLoading || isFormEmpty || !isFormValid}
          >
            Войти
          </button>
          <span className="login__form-span-link form__span-link">
            Ещё не зарегистрированы?
            <button
              className="login__form-button form__button-go"
              onClick={goToRegistration}
              type="button"
            >
              Регистрация
            </button>
          </span>
        </form>
      </section>
    </main>
  );
}

export default Login;
