import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCountries, createActivity } from "../../redux/actions";
import { validateForm } from "./validations";
import NavBar from "../../components/navBar/navBar";

import "./form.css";

function FormPage() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);

  const [input, setInput] = useState({
    name: "",
    description: "",
    duration: "",
    difficulty: "",
    season: "",
    country: [],
  });

  const selectedCountries = input.country.map(countryID => {
    const selectedCountry = allCountries.find(country => country.ID === countryID);
    return selectedCountry;
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    duration: "",
    difficulty: "",
    season: "",
    country: "",
  });

  const sortCountries = (arr) => {
    const sortedcountries = arr.sort((a, b) => a.name.localeCompare(b.name));
    return sortedcountries;
  };

  const countriesFixed = sortCountries(allCountries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    setErrors(validateForm(input));
  }, [input]);

  const isFormValid = () => {
    // Verificar si todos los campos requeridos están completos y sin errores
    return (
      input.name.trim() !== "" &&
      input.duration.trim() !== "" &&
      input.difficulty.trim() !== "" &&
      input.season.trim() !== "" &&
      input.country.length > 0 &&
      Object.values(errors).every((error) => error === "")
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  function handleCountrySelect(countryID) {
    setInput({
      ...input,
      country: [...input.country, countryID],
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      dispatch(createActivity(input));
      console.log(input);
      alert("Activity created succesfully");
      setInput({
        name: "",
        description: "",
        duration: "",
        difficulty: "",
        season: "",
        country: [],
      });
    }
  };

  function handleDelete(countryID) {
    const updatedCountriesList = input.country.filter((c) => c !== countryID);
    setInput({
      ...input,
      country: updatedCountriesList,
    });
  }

  return (
    <>
    <div className=".detail-navbar">
      <NavBar />
    </div>
      <div className="form-container">
        <div className="form-info-container">
          <form className="form" onSubmit={handleSubmit}>
            <h2>Activity creator</h2>
            <div className="user-box">
              <input
                name="name"
                type="text"
                value={input.name}
                onChange={handleChange}
                placeholder="Activity name"
              />
              <div className="error-message">{errors.name}</div>
            </div>

            <div className="user-box">
              <textarea
                name="description"
                value={input.description}
                onChange={handleChange}
                placeholder="Description"
              />
              <div className="error-message">{errors.description}</div>
            </div>

            <div className="user-box">
              <label htmlFor="duration">Activity duration time:</label>
              <input
                name="duration"
                type="time"
                value={input.duration}
                onChange={handleChange}
                placeholder="Enter the duration time in HH:mm"
                pattern="(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]"
              />
              <div className="error-message">{errors.duration}</div>
            </div>

            <div className="user-box">
              <select
                onChange={handleChange}
                name="difficulty"
                value={input.difficulty}
              >
                <option disabled>Choose difficulty</option>
                <option value="" style={{ display: "none" }}>
                  Choose difficulty
                </option>
                <option value={1}>1 - Very Easy</option>
                <option value={2}>2 - Easy</option>
                <option value={3}>3 - Normal</option>
                <option value={4}>4 - Hard</option>
                <option value={5}>5 - Very Hard</option>
              </select>
              <div className="error-message">{errors.difficulty}</div>
            </div>

            <div className="user-box">
              <select
                name="season"
                value={input.season}
                onChange={handleChange}
              >
                <option disabled>Choose season</option>
                <option value="" style={{ display: "none" }}>
                  Choose season
                </option>
                <option value="Spring">Spring</option>
                <option value="Winter">Winter</option>
                <option value="Autumn">Autumn</option>
                <option value="Summer">Summer</option>
              </select>
              <div className="error-message">{errors.season}</div>
            </div>

            <div className="user-box">
              <select
                name="country"
                value=""
                onChange={(e) => handleCountrySelect(e.target.value)}
                multiple
              >
                <option disabled>Choose countries</option>
                <option value="" style={{ display: "none" }}>
                  Choose countries
                </option>
                {countriesFixed?.map((country) => (
                  <option
                    key={country.ID}
                    value={country.ID}
                    disabled={input.country.includes(country.ID)}
                  >
                    {country.name}
                  </option>
                ))}
              </select>
              <div className="error-message">{errors.country}</div>
            </div>

            <div className="selected-countries">
              <h3>Selected countries:</h3>
              <ul>
                {input.country.length > 0 &&
                  selectedCountries.map((country) => (
                    <li key={country}>
                      {country.name + " "}
                      <button
                        type="button"
                        onClick={() => handleDelete(country.ID)}
                      >
                        X
                      </button>
                    </li>
                  ))}
              </ul>
            </div>

            {isFormValid() ? (
              <button className="submit" type="submit">
                Submit
              </button>
            ) : (
              <div className="instruction-message">
                Complete all required fields without errors to enable the Submit button.
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default FormPage;
