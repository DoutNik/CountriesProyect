const  activityModel = require('../models/TourismActivityModel.js')
const  countryModel  = require('../models/CountryModel.js')
async function postActivities(req, res) {
    const { name, description, countries } = req.body
    try {
        const activity = await activityModel.create({
            name,
            description,
        })
            // Relaciona la actividad con los países proporcionados
    if (countries && countries.length > 0) {
        const countryModels = await countryModel.findAll({ where: { cca3: countries } });
        await activity.setCountries(countryModels);
      }
  
      res.status(201).json(activity);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'There was an error when creating the tourist activity.' });
    }
  }
  
  module.exports = postActivities;