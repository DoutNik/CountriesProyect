// formValidations.js

export const validateForm = (input) => {
  const errors = {
    name: "",
    description: "",
    duration: "",
    difficulty: "",
    season: "",
    countriesList: "",
  };

  if (input.name.trim() === "") {
    errors.name = "El nombre es obligatorio";
  } else if (/[\d]/.test(input.name)) {
    errors.name = "El nombre no debe contener números";
  } else if (input.name.trim().length < 5) {
    errors.name = "El nombre debe contener al menos 5 caracteres";
  }

  if (input.description.trim() === "") {
    errors.description = "La descripción es obligatoria";
  } else if (input.description.trim().length < 15) {
    errors.description = "La descripción debe contener al menos 15 caracteres";
  } else if (input.description.trim().length > 150) {
    errors.description = "La descripción no puede tener más de 150 caracteres";
  }

  if (input.duration === "") {
    errors.duration = "Debe ingresar la duración en formato HH:mm";
  } else {
    const timePattern = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timePattern.test(input.duration)) {
      errors.duration = "El formato de la duración debe ser HH:mm (por ejemplo, 12:30)";
    }
  }

  if (input.difficulty === "") {
    errors.difficulty = "La dificultad es obligatoria";
  }

  if (input.season === "") {
    errors.season = "La temporada es obligatoria";
  }

  if (input.country.length === 0) {
    errors.country = "Debes seleccionar al menos un país";
  }

  return errors;
};
