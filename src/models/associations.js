const User = require("./User");
const Resume = require("./Resume");
const ResumeAnalysis = require("./ResumeAnalysis");

// User -> Resume
User.hasMany(Resume, {
  foreignKey: "user_id",
  as: "resumes",
});

// Resume -> User
Resume.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

// Resume -> ResumeAnalysis
Resume.hasOne(ResumeAnalysis, {
  foreignKey: "resume_id",
  as: "analysis",
});

// ResumeAnalysis -> Resume
ResumeAnalysis.belongsTo(Resume, {
  foreignKey: "resume_id",
  as: "resume",
});

module.exports = {
  User,
  Resume,
  ResumeAnalysis,
};
