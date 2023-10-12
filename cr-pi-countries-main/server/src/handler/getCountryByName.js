const getCountryByNameController = require("../controllers/getCountryByName");

const getCountryByNameHandler = async (req, res) => {
  try {
    const { name } = req.query;

    const country = await getCountryByNameController(name);
    return res.status(200).json(country);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "There was an error obtaining the country information",
        details: error.message,
      });
  }
};

module.exports = getCountryByNameHandler;
