const { Country } = require("../db");

async function getCountryByName(req, res){
    const {name} = req.body
    
    try {
        const response = await countryModel.findAll({
            where: {
                name: {
                    [Sequelize.Op.iLike]: `%${name}%`,
                },
            },
        })
        if (countries.length === 0) {
            return res.status(404).json({ error: 'No se encontraron países con ese nombre.' });
          }
          res.json(countries);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Hubo un error al obtener los países por nombre.' });
        }
      }
      
      module.exports = getCountryByName;