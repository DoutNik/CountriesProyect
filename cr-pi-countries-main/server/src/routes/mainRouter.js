const { Router } = require("express");
const getAllCountriesHandler = require("../handler/getAllCountries")
const getCountryByIdHandler = require("../handler/getCountryById")
const getCountryByNameHandler = require("../handler/getCountryByName")
const getTourismActivitiesHandler = require("../handler/getTourismActivities")
const postActivitiesHandler = require("../handler/postActivities")

const router = Router();

router.get('/countries', getAllCountriesHandler)
router.get('/countries/name', getCountryByNameHandler)
router.get('/countries/:ID', getCountryByIdHandler)
router.post('/tourismActivities', getTourismActivitiesHandler)
router.get('/tourismActivities', postActivitiesHandler)

module.exports = router;
