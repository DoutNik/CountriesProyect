const { Country, TourismActivity } = require("../db");

async function postActivitiesHandler(req, res) {
  const { name, description, difficulty, duration, season, country } = req.body;

  try {
    let activity = await TourismActivity.create({
      name,
      description,
      difficulty,
      duration,
      season,
    });
    await activity.setCountries(country);

    const activityWithCountry = await TourismActivity.findOne({
      where: { name },
      attributes: { exclude: ["timestamps"] },
      include: [
        {
          model: Country,
          through: { attributes: [] }, // exclude the intermediate table attributes
        },
      ],
    });

    res.json(activityWithCountry);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = postActivitiesHandler;
