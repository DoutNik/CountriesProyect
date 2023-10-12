const getAllActivitiesController = require("../controllers/getTourismActivities");

const getAllActivitiesHandler = async (req, res) => {
  try {
    const activities = await getAllActivitiesController();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getAllActivitiesHandler;
