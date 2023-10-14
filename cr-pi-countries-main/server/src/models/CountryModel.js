const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => { sequelize.define('Country', {
  ID: {
    type: DataTypes.STRING(3),
    primaryKey: true,
    allowNull: false,
    unique: true,
    validate: {
      len: [3, 3],
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  official_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  flagImage: {
    type: DataTypes.STRING,
    allowNull: false
  },
  flagImage2: {
    type: DataTypes.STRING,
    allowNull: false
  },
  continent: {
    type: DataTypes.STRING,
  },
  capital: {
    type: DataTypes.STRING,
  },
  subregion: {
    type: DataTypes.STRING,
  },
  area: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  population: {
    type: DataTypes.INTEGER,
  },
}, {
  timestamps: false
});
}

