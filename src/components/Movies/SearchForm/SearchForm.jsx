import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";


function SearchForm() {
  return (
    <section className="serach">
      <form className="serach__form">
        <input className="serach__form_input" placeholder="Фильм"></input>
        <button className="serach__form_button" type="button" />
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
