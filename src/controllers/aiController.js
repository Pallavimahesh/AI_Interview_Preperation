const { generateQuestions } = require("../services/generateQuestionAiService");
const ResumeAnalysis = require("../models/ResumeAnalysis");
const InterviewSessions = require("../models/InterviewSessions");
const InterviewQuestions = require("../models/InterviewQuestions");
const sequelize = require("../config/database");
const {
  buildResumePrompt,
  buildSkillPrompt,
} = require("../services/promptBuilder");
exports.generateQuestions = async (req, res) => {
  console.log("outside try");
  const { user_id, skill, resumeId, difficulty, count } = req.body;
  let prompt;
  const transaction = await sequelize.transaction();
  try {
    if (resumeId) {
      const analysisRecord = await ResumeAnalysis.findOne({
        where: { resume_id: resumeId },
      });

      if (!analysisRecord) {
        return res.status(404).json({
          success: false,
          message: "Resume analysis not found",
        });
      }
      const analysis =
        typeof analysisRecord.analysis_json === "string"
          ? JSON.parse(analysisRecord.analysis_json)
          : analysisRecord.analysis_json;
      prompt = buildResumePrompt(analysis, difficulty, count);
    } else {
      prompt = buildSkillPrompt(skill, difficulty, count);
    }
    const result = await generateQuestions(prompt);
    console.log("resume_id", resumeId);
    const session = await InterviewSessions.create(
      {
        user_id: user_id,

        resume_id: resumeId,

        difficulty: difficulty,

        question_count: count,

        status: "IN_PROGRESS",
        started_at: new Date(),
      },
      { transaction },
    );
    console.log("Session added");
    const questions =
      typeof result === "string"
        ? JSON.parse(
            result
              .replace(/```json/g, "")
              .replace(/```/g, "")
              .trim(),
          )
        : aiResponse;
    const questionRows = questions.map((q, index) => ({
      session_id: session.id,
      question: q.question,
      skill: q.skill,
      difficulty: q.difficulty,
    }));

    await InterviewQuestions.bulkCreate(questionRows, { transaction });
    console.log("questions added");
    await transaction.commit();

    res.json({
      success: true,
      sessionId: session.id,
      data: questions,
    });
  } catch (error) {
    await transaction.rollback();

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
