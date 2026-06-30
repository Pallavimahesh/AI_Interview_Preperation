const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const InterviewQuestions = sequelize.define("interview_questions", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  session_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  skill: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  difficulty: {
    type: DataTypes.ENUM("Easy", "Medium", "Hard"),
    allowNull: false,
  },

  expected_answer: {
    type: DataTypes.STRING,
  },
  order_no: {
    type: DataTypes.INTEGER,
  },
});

module.exports = InterviewQuestions;
