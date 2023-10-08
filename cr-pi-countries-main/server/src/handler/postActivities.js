const postActivityController = require("../controllers/postActivities");

async function postActivitiesHandler(req, res) {
  const { name, description, difficulty, duration, season, countries } = req.body;

  try {
    if (!name || !description || !difficulty || !duration || !season) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    const activity = await postActivityController(name, description, difficulty, duration, season, countries);

    return res.status(201).json(activity);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'There was an error when creating the tourist activity.' });
  }
}

module.exports = postActivitiesHandler;
