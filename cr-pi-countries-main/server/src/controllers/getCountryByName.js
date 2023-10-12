const { Country, TourismActivity } = require("../db");
const { Op } = require("sequelize");

const getCountryByNameController = async (name) => {
  const country = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: {
      model: TourismActivity,
      attributes: ["difficulty", "description", "duration", "name", "season"],
    },
  });
  if (country.length >= 1) {
    return country;
  } else {
    throw new Error("No matches found");
  }
};

module.exports = getCountryByNameController;
