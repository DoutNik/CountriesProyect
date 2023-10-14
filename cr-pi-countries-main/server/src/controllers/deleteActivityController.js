
const { TourismActivity } = require("../db");

// Controlador para obtener un país por su ID
const deleteActivityController = async (id) => {
try {
    const activity = await TourismActivity.destroy({
        where: {
          id: id
        }
    })
  } catch (error) {
    // Captura y maneja cualquier error que ocurra durante la ejecución
    throw new Error("Error deleting activity by ID: " + error.message);
  }
};

module.exports = deleteActivityController;
