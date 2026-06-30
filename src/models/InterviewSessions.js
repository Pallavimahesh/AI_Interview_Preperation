const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const InterviewSessions = sequelize.define("interview_sessions", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  question_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  resume_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  difficulty: {
    type: DataTypes.ENUM("Easy", "Medium", "Hard"),
    allowNull: false,
  },

  status: {
    type: DataTypes.ENUM("IN_PROGRESS", "COMPLETED"),
    allowNull: false,
  },
  overall_score: {
    type: DataTypes.INTEGER,
  },
  started_at: {
    type: DataTypes.DATE,
  },
  completed_at: {
    type: DataTypes.DATE,
  },
});

module.exports = InterviewSessions;
