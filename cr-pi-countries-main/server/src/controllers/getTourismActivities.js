const { activityModel } = require('../models/TourismActivityModel.js');

async function getAllActivities(req, res) {
  try {
    const activities = await activityModel.findAll();
    res.json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'There was an error when obtaining the tourist activities.' });
  }
}

module.exports = getAllActivities;
