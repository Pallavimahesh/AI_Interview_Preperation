const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Question = sequelize.define("Question", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
  },

  skill: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  difficulty: {
    type: DataTypes.ENUM("Easy", "Medium", "Hard"),
    allowNull: false,
  },

  correct_answer: {
    type: DataTypes.TEXT,
  },
});

module.exports = Question;
