const getCountryByIdController = require("../controllers/getCountryById.js");

const getCountryByIdHandler = async (req, res) => {
  try {
    const { ID } = req.params;

    const country = await getCountryByIdController(ID);
    if (country) {
      res.status(200).json(country);
    } else {
      res.status(404).json({ error: "Country not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "There was an error obtaining the country information" });
  }
};

module.exports = getCountryByIdHandler;
