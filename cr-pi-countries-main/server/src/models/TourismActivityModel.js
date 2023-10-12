const { DataTypes } = require('sequelize');


module.exports = (sequelize) => { sequelize.define('TourismActivity', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
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
    type: DataTypes.STRING,
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
