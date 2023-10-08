const getAllCountriesController = require('../controllers/getAllCountries')

const getAllCountriesHandler = async (req, res) => {
    try {
        const countries = await getAllCountriesController();
        res.status(200).json(countries)
    }catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = getAllCountriesHandler;