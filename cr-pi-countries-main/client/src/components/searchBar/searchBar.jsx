import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountryByName,
  setSortBy,
  reset,
  setFilterByContinent,
  filterByActivity,
  getActivities,
} from "../../redux/actions";

import "./searchBar.css";

function SearchBar() {
  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.allActivities);
  const [searchString, setSearchString] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  const handleSortByChange = (event) => {
    let selectedFilter = event.target.value;
    dispatch(setSortBy(selectedFilter));
  };

  const handleContinentFilterChange = (event) => {
    let selectedContinent = event.target.value;
    setSelectedContinent(selectedContinent);
    dispatch(setFilterByContinent(selectedContinent));
  };

  // Ordena las actividades en el <select> por nombre de menor a mayor
  const sortActivities = (arr) => {
    const sortedActivities = arr.sort((a, b) => a.name.localeCompare(b.name));
    return sortedActivities;
  };
  const activitiesFixed = sortActivities(allActivities);

  const handleActivityFilterChange = (event) => {
    let selectedActivity = event.target.value;
    setSelectedActivity(selectedActivity);
    dispatch(filterByActivity(selectedActivity));
  };

  function resetHandler() {
    dispatch(reset());
    setSelectedContinent("");
    setSelectedActivity("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await dispatch(getCountryByName(searchString));
      setSearchString("");
    } catch {
      alert("No se encontraron resultados para la búsqueda.");
    }
  }

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit}>
        <div className="searchBar">
          <button className="reset" onClick={resetHandler}>
            Reset filters
          </button>
          <input
            type="text"
            placeholder="Search..."
            value={searchString}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </div>

        <div className="country-filters">
          <select onChange={handleContinentFilterChange} value={selectedContinent}>
            <option value="" disabled>Continent selector</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctica">Antarctica</option>
          </select>

          <select onChange={handleSortByChange}>
            <option value="">Sort selector</option>
            <option value="A ~ Z">A ~ Z</option>
            <option value="Z ~ A">Z ~ A</option>
            <option value="populationAsc">Población (menor a mayor)</option>
            <option value="populationDesc">Población (mayor a menor)</option>
          </select>

          <select onChange={handleActivityFilterChange} value={selectedActivity}>
            <option value="" disabled>Activity Filter</option>
            {activitiesFixed?.map((activity) => (
              <option value={activity.name} key={activity.id}>
                {activity.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
