const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const resume_analysis = sequelize.define(
  "resume_analysis",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    resume_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    analysis_json: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    tableName: "resume_analysis",
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored: true,
  },
);

module.exports = resume_analysis;
