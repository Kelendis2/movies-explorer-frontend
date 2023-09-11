import React, { useRef } from "react";

import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject/AboutProject";
import Portfolio from "./Portfolio/Portfolio";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";

function Main() {
  const aboutProjectRef = useRef(null);

  const scrollToAboutProject = () => {
    if (aboutProjectRef.current) {
      aboutProjectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="main">
      <Promo scroll={scrollToAboutProject} />
      <AboutProject aboutProjectRef={aboutProjectRef} />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;
