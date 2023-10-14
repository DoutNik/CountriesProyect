const deleteActivityController = require("../controllers/deleteActivityController")

const deleteActivityHandler = async (req, res) => {
    try {
        const { id } = req.params;
    
        const activity = await deleteActivityController(id);
        if (!activity) {
          res.status(200).json("Activity deleted succesfully");
        }
      } catch (error) {
        res
          .status(500)
          .json({ error: "There was an error deleting the activity information" });
      }
    };
    
    module.exports = deleteActivityHandler;
    