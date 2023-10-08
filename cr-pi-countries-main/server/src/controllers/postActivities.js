const { Country, TourismActivity } = require("../db");

async function postActivityController(name, description, difficulty, duration, season, countries) {
  try {
    const activity = await TourismActivity.create({
      name,
      description,
      difficulty,
      duration,
      season,
    });

    if (countries && countries.length > 0) {
      const countryModels = await Country.findAll({ where: { cca3: countries } });
      await activity.setCountries(countryModels);
    } else {
      throw new Error('At least one country should be provided.');
    }

    return activity;
  } catch (error) {
    throw error;
  }
}

module.exports = postActivityController;
