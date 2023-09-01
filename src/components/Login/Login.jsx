import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <main className="login">
      <form className="login__form form">
        <label className="login__form-label form__label">E-mail</label>
        <input
          className="login__form-input form__input"
          placeholder="pochta@yandex.ru|"
          maxLength={30}
          minLength={5}
          type="email"
          name="email"
          required
        ></input>
        <label className="login__form-label form__label">Пароль</label>
        <input
          className="login__form-input form__input"
          placeholder="••••••••••••••"
          maxLength={12}
          minLength={8}
          type="password"
          name="password"
          required
        ></input>
        <span className="login__form-span-error form__span-error"></span>
        <button className="login__form-button form__button" type="button">
          Войти
        </button>
        <span className="login__form-span-link form__span-link">
          Ещё не зарегистрированы?
          <Link
            className="login__form-link form__link"
            to="/signup"
          >
            Регистрация
          </Link>
        </span>
      </form>
    </main>
  );
}

export default Login;
