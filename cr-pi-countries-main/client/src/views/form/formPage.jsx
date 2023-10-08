import React, { useState } from "react";

import { validate } from "./validations"; 
import NavBar from '../../components/navBar/navBar'


import "./form.css";

function formPage() {
  const [input, setInput] = useState({
    name: "",
    description: "",
    duration: "",
    difficulty: "",
    season: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    duration: "",
    difficulty: "",
    season: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validar el formulario
    const validationErrors = validate(input);
    setErrors(validationErrors);

    // Enviar el formulario solo si no hay errores de validación
    if (Object.keys(validationErrors).length === 0) {
      // Aquí puedes enviar el formulario, por ejemplo, hacer una solicitud HTTP
      console.log("Formulario enviado:", input);
    }
  };

  return (
    <>
    <NavBar/>
      <div className="form-container">
        <h2>Activity creator</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              name="name"
              type="text"
              value={input.name}
              onChange={handleChange}
              required=""
              />
              <label>Activity name</label>
            <span className="error">{errors.name}</span>
          </div>
          <div className="user-box">
            <textarea
              name="description"
              value={input.description}
              onChange={handleChange}
              required=""
              />
              <label>Description</label>
            <span className="error">{errors.description}</span>
          </div>
          <div className="user-box">
            <input
              name="duration"
              type="text"
              value={input.duration}
              onChange={handleChange}
              required=""
              />
              <label>Duration</label>
            <span className="error">{errors.duration}</span>
          </div>
          <div className="user-box">
            <input
              name="difficulty"
              type="text"
              value={input.difficulty}
              onChange={handleChange}
              required=""
              />
              <label>Difficulty</label>
            <span className="error">{errors.difficulty}</span>
          </div>
          <div className="user-box">
            <input
              name="season"
              type="text"
              value={input.season}
              onChange={handleChange}
              required=""
              />
              <label>Season</label>
            <span className="error">{errors.season}</span>
          </div>
          {Object.keys(errors).every((key) => errors[key] === "") ? (
            <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
          ) : (
            <p>Corrige los errores antes de enviar el formulario.</p>
          )}
        </form>
      </div>
      
    </>
  );
}

export default formPage;
