import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="serach">
      <form className="serach__form">
        <div className="serach__form-item">
          <input className="serach__form-input" placeholder="Фильм" required></input>
          <button className="serach__form-button" type="button" />
        </div>
        <div className="serach__filterCheckbox">
          <button className="serach__filterCheckbox-slider " type="button" />
          <span className="serach__filterCheckbox-span">Короткометражки</span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
