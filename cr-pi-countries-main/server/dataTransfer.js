const axios = require("axios");
const { Country } = require("./src/db"); 

const URL = "http://localhost:5000/countries"; 

const transferDataToDB = async () => {
  try {
    const { data } = await axios.get(URL);

      for (const country of data) {
        const { cca3, name, continents, capital, subregion, area, population, flags } = country;

        const [countryInstance, created] = await Country.findOrCreate({
          where: { ID: cca3 },
          defaults: {
            name: name.common,
            official_name: name.official,
            flagImage: flags.png,
            flagImage2: flags.svg,
            continent: continents[0],
            capital: capital ? capital[0] : "Unknown",
            subregion: subregion ? subregion : "Unknown",
            area: area,
            population: population
          }
        });
      }
      console.log("Transfer complete ^-^ Server ready");
  } catch (error) {
    console.error("Error transfering data to database: ", error.message);
  }
}

module.exports = transferDataToDB