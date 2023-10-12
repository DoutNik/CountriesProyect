const { Country, TourismActivity } = require("../db");




const getCountryActivityHandler = async (req, res) => {
    const { ID } = req.params;
  
    try {
      // Realiza una consulta a la base de datos para obtener las actividades relacionadas con el país
      const activities = await TourismActivity.findAll({
        include: [
          {
            model: Country,
            where: { ID }, // Filtra por el ID del país
          },
        ],
      });
  
      res.json(activities);
    } catch (error) {
      console.error('Error fetching country activities:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  module.exports = getCountryActivityHandler