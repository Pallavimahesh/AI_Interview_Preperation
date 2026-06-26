const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Resume = sequelize.define("Resume", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  file_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  file_path: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Resume;
