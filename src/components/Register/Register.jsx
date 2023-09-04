import React from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register({ handleRegister }) {
  const navigate = useNavigate();
  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = React.useState("");
  const { name, password, email } = formValue;

  const goToLogin = () => {
    navigate("/signin");
  };

  const handleReg = (e) => {
    e.preventDefault();

    if (!formValue.name || !formValue.email || !formValue.password) {
      setErrorMessage("Both fields are required");
      return;
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister({ name, password, email });
  };
  return (
    <main className="signup">
      <section className="register">
        <form className="register__form form" onSubmit={handleSubmit}>
          <label className="register__form-label form__label"> Имя </label>
          <input
            className="register__form-input form__input"
            placeholder="Виталий"
            maxLength={20}
            minLength={2}
            id="name"
            name="name"
            autoComplete="name"
            value={formValue.name}
            onChange={handleChange}
            type="text"
            required
          ></input>
          <label className="register__form-label form__label ">E-mail</label>
          <input
            className="register__form-input form__input"
            placeholder="pochta@yandex.ru"
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

          <label className="register__form-label form__label">Пароль</label>
          <input
            className="register__form-input form__input"
            placeholder="••••••••••••••"
            maxLength={12}
            minLength={8}
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={formValue.password}
            onChange={handleChange}
            required
          ></input>

          <span className="register__form-span-error form__span-error">{errorMessage}</span>
          <button className="register__form-button form__button" type="submit">
            Зарегестрироваться
          </button>
          <span className="register__form-span-link form__span-link">
            Уже зарегистрированны?
            <button
              className="register__form-button form__button-go"
              type="button"
              onClick={goToLogin}
            >
              Войти
            </button>
          </span>
        </form>
      </section>
    </main>
  );
}

export default Register;
