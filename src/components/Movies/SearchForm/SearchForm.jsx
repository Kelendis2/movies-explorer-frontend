import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="serach">
      <form className="serach__form">
        <div className="serach__form_item">
          <input className="serach__form_input" placeholder="Фильм"></input>
          <button className="serach__form_button" type="button" />
        </div>
        <div className="serach__filterCheckbox">
          <button className="serach__slider " type="button" />
          <span className="serach__span">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
