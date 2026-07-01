const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const InterviewAnswers = sequelize.define("interview_answers", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  user_answer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ai_feedback_json: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = InterviewAnswers;
