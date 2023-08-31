import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <main className="login">
      <form className="login__form" id="form">
        <label className="login__form-label " id="form_label">
          E-mail
        </label>
        <input
          className="login__form-input "
          id="form_input"
          placeholder="pochta@yandex.ru|"
        ></input>
        <label className="login__form-label " id="form_label">
          Пароль
        </label>
        <input className="login__form-input " id="form_input"></input>
        <span className="login__form-span-error "></span>
        <button className="login__form-button " id="form_button" type="button">
          Войти
        </button>
        <span className="login__form-span-link " id="form_span-link">
          Ещё не зарегистрированы?
          <Link
            className="login__form-link "
            id="form_link"
            type="link"
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
