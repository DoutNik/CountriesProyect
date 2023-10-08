const { Country, TourismActivity } = require("../db");

// Esta función obtiene todos los países de la base de datos.
async function getAllCountriesController() {
  try {
    // busca todos los países en la base de datos.
    const allCountries = await Country.findAll({
      include: {
        model: TourismActivity,
        attributes: ["difficulty", "duration", "name", "season"],
        through: {
          attributes: [], // Esto evita que se incluyan las columnas de la tabla de union (CountryActivities)
        },
      },
    });
    
    // Devuelve la lista de países obtenidos.
    return allCountries;
  } catch (error) {
    // En caso de error, registra el error en la consola.
    console.error(error);
    // Devuelve una respuesta de error
    throw new Error('There was an error obtaining the countries.');
  }
}

module.exports = getAllCountriesController;
