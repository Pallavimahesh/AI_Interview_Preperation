const User = require("./User");
const Resume = require("./Resume");
const ResumeAnalysis = require("./ResumeAnalysis");
const InterviewSessions = require("./InterviewSessions");
const InterviewQuestions = require("./InterviewQuestions");
const InterviewAnswers = require("./InterviewAnswers");
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

User.hasMany(InterviewSessions, {
  foreignKey: "user_id",
  as: "sessions",
});

InterviewSessions.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

Resume.hasMany(InterviewSessions, {
  foreignKey: "resume_id",
  as: "sessions",
});

Resume.belongsTo(Resume, { foreignKey: "resume_id", as: "resume" });

InterviewSessions.hasMany(InterviewQuestions, { foreignKey: "session_id" });
InterviewQuestions.belongsTo(InterviewSessions, { foreignKey: "session_id" });

InterviewQuestions.hasOne(InterviewAnswers, { foreignKey: "question_id" });
InterviewAnswers.belongsTo(InterviewQuestions, { foreignKey: "question_id" });
module.exports = {
  User,
  Resume,
  ResumeAnalysis,
  InterviewSessions,
  InterviewQuestions,
  InterviewAnswers,
};
