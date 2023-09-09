import "./Header.css";
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import NavTab from "../NavTab/NavTab";
import profileLogo from "../../images/profilemenuL.svg";
import profileMain from "../../images/profilemain.svg"
import Overlay from "../Overlay/Overlay";

function Header({ loggedIn }) {
  const location = useLocation();
  let className = "header";
  let classNameContainer = "header__container";

  const { pathname } = location;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [showNavTab, setShowNavTab] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeNavTab = () => {
    setShowNavTab(false);
  };

  const classNameHeader = () => {
    if (pathname === "/") {
      className = `${className} header_main`;
    } else if (
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    ) {
      className = `${className} header_movie`;
    } else if (pathname === "/signin") {
      className = `${className} header_login`;
    } else if (pathname === "/signup") {
      className = `${className} header_login`;
    }
    return className;
  };
  const classNameHeaderContainer = () => {
    if (pathname === "/signin") {
      className = `${classNameContainer} header_container-sign`;
    } else if (pathname === "/signup") {
      className = `${classNameContainer} header_container-sign`;
    } else {
      className = `${classNameContainer} `;
    }
    return className;
  };

  const navContent = () => {
    if (pathname === "/") {
      if (loggedIn) {
        return (
          <Navigation className="navigation_main">
            <ul className="navigation__movie">
              <li className="navigation__movie-item">
                <Link className="navigation__nav-link" to="/movies">
                  Фильмы
                </Link>
              </li>
              <li className="navigation__movie-item">
                <Link
                  className="navigation__nav-link navigation__nav-link_active"
                  to="/saved-movies"
                >
                  Сохраненные фильмы
                </Link>
              </li>
            </ul>
            <div className="navigation__profile">
              <Link className="navigation__nav-link" to="/profile">
                <img
                  className="navigation__profile-logo"
                  alt="Иконка-профиля"
                  src={profileMain}
                />
              </Link>
            </div>
          </Navigation>
        );
      } else {
        return (
          <Navigation>
            <Link className="navigation__link" to="/signup">
              Регистрация
            </Link>
            <Link className="navigation__button" to="/signin">
              Войти
            </Link>
          </Navigation>
        );
      }
    } else if (
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    ) {
      if (isMobile) {
        return (
          <Navigation>
            <button
              className="navigation__button-menu"
              onClick={() => setShowNavTab(true)}
            />
          </Navigation>
        );
      } else {
        return (
          <Navigation className="navigation_main">
            <ul className="navigation__movie">
              <li className="navigation__movie-item">
                <Link className="navigation__nav-link" to="/movies">
                  Фильмы
                </Link>
              </li>
              <li className="navigation__movie-item">
                <Link
                  className="navigation__nav-link navigation__nav-link_active"
                  to="/saved-movies"
                >
                  Сохраненные фильмы
                </Link>
              </li>
            </ul>
            <div className="navigation__profile">
              <Link className="navigation__nav-link" to="/profile">
                <img
                  className="navigation__profile-logo"
                  alt="Иконка-профиля"
                  src={profileLogo}
                />
              </Link>
            </div>
          </Navigation>
        );
      }
    } else if (pathname === "/signin") {
      return <h1 className="header__title">Рады видеть!</h1>;
    } else if (pathname === "/signup") {
      return <h1 className="header__title">Добро пожаловать!</h1>;
    }
  };

  return (
    <>
      <header className={classNameHeader()}>
        <div className={classNameHeaderContainer()}>
          <Link className="header__link" to="/">
            <img className="header__logo" alt="Логотип" src={logo} />
          </Link>
          {navContent()}
        </div>
      </header>
      {showNavTab && (
        <>
          <NavTab closeNavTab={closeNavTab} />
          <Overlay isOpen={showNavTab} onClose={closeNavTab} />
        </>
      )}
    </>
  );
}

export default Header;
