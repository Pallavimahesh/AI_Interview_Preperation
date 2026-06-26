const { parseResumeWithPython } = require("../services/resumeService");
const { analyzeResume } = require("../services/resumeAnalysisAiService");

const cleanJSON = require("../utils/jsonCleaner");

exports.uploadResume = async (req, res, next) => {
  const resumeText = await parseResumeWithPython(req.file.path);

  const aiResponse = await analyzeResume(resumeText);

  const cleaned = cleanJSON(aiResponse);

  const analysis = JSON.parse(cleaned);

  res.json({
    success: true,

    data: analysis,
  });
};
