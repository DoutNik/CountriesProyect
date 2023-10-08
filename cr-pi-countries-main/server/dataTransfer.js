const axios = require("axios");
const { Country } = require("./src/db"); 

const URL = "http://localhost:5000/countries"; 

async function transferDataToDB() {
  try {
    await Country.sync();
    const { data } = await axios.get(URL);
    
    await Promise.all(data.map(async (country) => {
      const countryDB = {
        ID: country.cca3,
        name: country.name.common,
        official_name: country.name.official,
        flagImage: country.flags.png,
        flagImage2: country.flags.svg,
        continent: country.continents,
        capital: country.capital,
        subregion: country.subregion,
        area: country.area,
        population: country.population
      };
      
      await Country.create(countryDB);
    }));
    
    console.log("Datos transferidos correctamente a la base de datos.");
  } catch (error) {
    console.error("Error al transferir datos a la base de datos:", error.message);
  }
};

transferDataToDB();
