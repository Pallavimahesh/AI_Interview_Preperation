const { generateQuestions } = require("../services/generateQuestionAiService");
const ResumeAnalysis = require("../models/ResumeAnalysis");
const {
  buildResumePrompt,
  buildSkillPrompt,
} = require("../services/promptBuilder");
exports.generateQuestions = async (req, res) => {
  const { skill, resumeId, difficulty, count } = req.body;
  let prompt;

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
  res.json({
    success: true,
    data: result,
  });
};
