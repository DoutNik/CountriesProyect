require('dotenv').config();
const { Sequelize } = require('sequelize');
const countryModel = require('./models/CountryModel');
const activityModel = require('./models/TourismActivityModel');

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false,
  native: false,
});

countryModel(sequelize);
activityModel(sequelize);

const { Country, TourismActivity } = sequelize.models
Country.belongsToMany(TourismActivity, { through: 'CountryActivities' });
TourismActivity.belongsToMany(Country, { through: 'CountryActivities' });

module.exports = {
  Country,
  TourismActivity,
  conn: sequelize,
};
