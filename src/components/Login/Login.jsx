import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login({ handleLogin }) {
  const navigate = useNavigate();

  const goToRegistration = () => {
    navigate("/signup");
  };

  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const { email, password } = formValue;

  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValue.email || !formValue.password) {
      setErrorMessage("Both fields are required");
      return;
    }
    handleLogin({ email, password });
  };
  return (
    <main className="signin">
      <section className="login">
        <form className="login__form form" onSubmit={handleSubmit}>
          <label className="login__form-label form__label">E-mail</label>
          <input
            className="login__form-input form__input"
            placeholder="pochta@yandex.ru|"
            maxLength={30}
            minLength={5}
            onChange={handleChange}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formValue.email}
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
            value={formValue.password}
            onChange={handleChange}
            required
          ></input>
          <span className="login__form-span-error form__span-error">
            {errorMessage}
          </span>
          <button className="login__form-button form__button"  type="submit">
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
