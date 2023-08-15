import "./Header.css";
import React from "react";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";



function Header() {
  console.log('header');
  return (
    <section className="header">
      {<img className="header__logo" alt="logo" src={logo} />}
      <Navigation />
    </section>
  );
}

export default Header;
