const { Country } = require("../db");

// Esta función obtiene todos los países de la base de datos.
async function getAllCountries() {
  try {
    // busca todos los países en la base de datos.
    const allCountries = await Country.findAll();
    
    // Devuelve la lista de países obtenidos.
    return allCountries;
  } catch (error) {
    // En caso de error, registra el error en la consola.
    console.error(error);
    // Devuelve una respuesta de error
    throw new Error('There was an error obtaining the countries.');
  }
}

module.exports = getAllCountries;
