import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions";

import "./searchBar.css"

function SearchBar() {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getCountryByName(searchString));
  }

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit}>
        <input
        className="search-bar-input"
          type="text"
          placeholder="Search..."
          value={searchString}
          onChange={handleChange}
        />
        <button className="search-bar-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
