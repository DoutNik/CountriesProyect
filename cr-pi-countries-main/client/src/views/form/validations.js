// validation.js

export const validate = (data) => {
    const errors = {};
  
    if (!data.name) {
      errors.name = "El nombre es requerido.";
    }
  
    if (!data.description) {
      errors.description = "La descripción es requerida.";
    }
  
    if (!data.duration) {
      errors.duration = "La duración es requerida.";
    }
  
    if (!data.difficulty) {
      errors.difficulty = "La dificultad es requerida.";
    }
  
    if (!data.season) {
      errors.season = "La temporada es requerida.";
    }
  
    return errors;
  };
  