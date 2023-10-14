const { Router } = require("express");
const getAllCountriesHandler = require("../handler/getAllCountries")
const getCountryByIdHandler = require("../handler/getCountryById")
const getCountryByNameHandler = require("../handler/getCountryByName")
const getTourismActivitiesHandler = require("../handler/getTourismActivities")
const postActivitiesHandler = require("../handler/postActivities")
const getCountryActivityHandler = require("../handler/getCountryActivity")
const deleteActivityHandler = require("../handler/deleteActivities")

const router = Router();

router.delete('/tourismActivities/:id', deleteActivityHandler)
router.get('/countries', getAllCountriesHandler)
router.get('/countries/name', getCountryByNameHandler)
router.get('/countries/:ID', getCountryByIdHandler)
router.get('/tourismActivities', getTourismActivitiesHandler)
router.post('/tourismActivities', postActivitiesHandler)
router.get('/countries/:ID/activities', getCountryActivityHandler)

module.exports = router;
