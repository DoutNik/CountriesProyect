const { Router } = require("express");
const getAllCountries = require("../controllers/getAllCountries.js")
const getCountryByIdHandler = require("../handler/getCountryById.js")
const getCountryByName = require("../controllers//getCountryByName.js")
const getTourismActivities = require("../controllers/getTourismActivities.js")
const postActivities = require("../controllers/postActivities.js")

const router = Router();

router.get('/countries', getAllCountries)
router.get('/countries/:ID', getCountryByIdHandler)
router.get('/countries/name?', getCountryByName)
router.post('/tourismActivities', getTourismActivities)
router.get('/tourismActivities', postActivities)

module.exports = router;
