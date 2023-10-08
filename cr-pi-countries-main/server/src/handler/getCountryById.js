const getCountryByIdController = require("../controllers/getCountryById.js")

const getCountryByIdHandler = async (req, res) => {
	try {
		const { ID } = req.params;

		const country = await getCountryByIdController(ID);
		console.log(country)
		res.status(200).json(country);
	} catch (error) {
		res.status(404).send(error.message);
	}
};

module.exports = getCountryByIdHandler;