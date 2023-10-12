const { TourismActivity, Country } = require("../db");

async function getAllActivitiesController() {
  try {
    const activities = await TourismActivity.findAll({
      include: {
        model: Country,
        attributes:["name", "ID", "continent", "capital", "population"]
      }
    });
    return activities;
  } catch (error) {
    console.error(error);
    throw new Error(
      "There was an error when obtaining the tourist activities."
    );
  }
}

module.exports = getAllActivitiesController;
