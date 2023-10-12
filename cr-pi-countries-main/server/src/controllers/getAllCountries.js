const { Country, TourismActivity } = require("../db");

// Esta función obtiene todos los países de la base de datos.
async function getAllCountriesController() {
  try {
    // busca todos los países en la base de datos.
    const allCountries = await Country.findAll({
      include: {
        model: TourismActivity,
        attributes: ["difficulty", "description", "duration", "name", "season"],
      },
    });
    return allCountries;
  } catch (error) {
    console.error(error);
    throw new Error("There was an error obtaining the countries.");
  }
}

module.exports = getAllCountriesController;
