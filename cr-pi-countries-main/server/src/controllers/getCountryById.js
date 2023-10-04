const { Country, TourismActivity } = require("../db");

// Controlador para obtener un país por su ID
const getCountryByIdController = async (ID) => {
  try {
    // Busca un país por su ID y también incluye la relación con las actividades turísticas asociadas
    const country = await Country.findByPk(ID, {
      include: {
        model: TourismActivity,
        attributes: ["difficulty", "duration", "name", "season"],
        through: {
          attributes: [], // Esto evita que se incluyan las columnas de la tabla de union (CountryActivities)
        },
      },
    });
    
    // Retorna el país encontrado
    return country;
  } catch (error) {
    // Captura y maneja cualquier error que ocurra durante la ejecución
    throw new Error("Error fetching country by ID: " + error.message);
  }
};

module.exports = getCountryByIdController;
