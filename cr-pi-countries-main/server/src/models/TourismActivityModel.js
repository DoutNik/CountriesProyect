const { DataTypes } = require('sequelize');


module.exports = (sequelize) => { sequelize.define('TourismActivity', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  difficulty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  duration: {
    type: DataTypes.FLOAT,
  },
  season: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['Summer', 'Autumn', 'Winter', 'Spring']],
    },
  },
});
}
