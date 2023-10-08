const { TourismActivity } = require('../db')

async function getAllActivitiesController() {
  try {
    const activities = await TourismActivity.findAll();
    return activities;
  } catch (error) {
    console.error(error);
    throw new Error('There was an error when obtaining the tourist activities.');
  }
}

module.exports = getAllActivitiesController;
