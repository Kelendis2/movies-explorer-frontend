import React, {useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onUpdateUser,isLoading }) {
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("query");
    localStorage.removeItem("isShortFilm");
    localStorage.removeItem("searchResults");
    navigate("/");
  };
  const currentUser = useContext(CurrentUserContext);
  const [value, setValue] = useState({});

  React.useEffect(() => {
    setValue({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser]);
  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(value);
  }

  return (
    <main className="profileMain">
      <section className="profile">
        <h1 className="profile__title"> {`Привет,  ${currentUser.name}!`}</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__form-item" id="profile-item_one">
            <label className="profile__form-label">Имя</label>
            <input
              className="profile__form-input"
              placeholder="Виталий"
              maxLength={20}
              minLength={2}
              type="text"
              name="name"
              id="Username"
              value={value.name ?? ""}
              onChange={handleChange}
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
              id="email"
              value={value.email ?? ""}
              onChange={handleChange}
            ></input>
          </div>
          <button className="profile__form-button" type="submit" >
            Редактировать
          </button>
        </form>
        <button
          className="profile__button-exit"
          id="profile__button-exit"
          type="button"
          onClick={signOut}
        >
          Выйти из аккаунта
        </button>
      </section>
    </main>
  );
}

export default Profile;
