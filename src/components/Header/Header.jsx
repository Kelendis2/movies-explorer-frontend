import "./Header.css";
import React from "react";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";
import profileLogo from "../../images/profile.svg";

function Header() {

  const location = useLocation();
  let className = "header";
  const { pathname } = location;

  const classNameHeader = () => {
    if (pathname === "/") {
      className = `${className} header_main`;
    }
    else if (pathname === "/movies" || pathname === "/saved-movies") {
      className = `${className} header_movie`;
    }
    else if (pathname === "/signin") {
      className = `${className} header_login`;
    }
    else if (pathname === "/signup") {
      className = `${className} header_login`;
    }
    return className;
  };

  const navContent = () =>{
    if (pathname === "/") {
      return (
          <Navigation>
            <Link className="navigation__link" to="/signup">
              Регистрация
            </Link>
            <Link className="navigation__button" type="button" to="/signin">
              Войти
            </Link>
          </Navigation>
      );

    } else if (pathname === "/movies" || pathname === "/saved-movies") {
      return (
          <Navigation>
            <div className="navigation__movie">
              <Link className="navigation__nav-link" to="/movies">
                Фильмы
              </Link>
              <Link
                className="navigation__nav-link"
                type="button"
                to="/saved-movies"
              >
                Сохраненные фильмы
              </Link>
            </div>
            <div className="navigation__profile">
              <Link className="navigation__nav-link" to="/profile">
                Аккаунт
              </Link>
              <Link
                className="navigation__nav-link"
                type="button"
                to="/saved-movies"
              >
                <img
                  className="navigation__profile-logo"
                  alt="profileLogo"
                  src={profileLogo}
                />
              </Link>
            </div>
          </Navigation>
      );

    } else if (pathname === "/signin") {
      return (
          <h2 className="heder__title">Рады видеть!</h2>
      );

    } else if (pathname === "/signup") {
      return (
          <h2 className="heder__title">Добро пожаловать!</h2>
      );
    }
  };

  return <header className = {classNameHeader()}>
    <Link className="heder__link" to="/">
            <img className="header__logo" alt="logo" src={logo} />
          </Link>
          { navContent()}
          </header>;
}

export default Header;












/*

/ разметка для роута /
<Link className='navigation__link' type="link" to='/signup'>
              Регистрация
            </Link>
            <Link className='navigation__button' type="button" to='/signin'>
              Войти
            </Link>


            разметка для /movies and  saved-movies
            <nav className="navigation">
      <div className="navigation__movie">
      <Link className='navigation__nav-link' type="link" to='/movies'>
              Фильмы
            </Link>
            <Link className='navigation__nav-link' type="button" to='/saved-movies'>
              Сохраненные фильмы
            </Link>
      </div>
      <div className="navigation__profile">
      <Link className='navigation__nav-link' type="link" to='/profile'>
              Аккаунт
            </Link>
            <Link className='navigation__nav-link' type="button" to='/saved-movies'>
              <img className="navigation__profile-logo"  alt="profileLogo" src={profileLogo} />
            </Link>
      </div>
    </nav>

*/
