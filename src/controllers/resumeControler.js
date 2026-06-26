const { parseResumeWithPython } = require("../services/resumeService");
const { analyzeResume } = require("../services/resumeAnalysisAiService");
const Resume = require("../models/Resume");
const ResumeAnalysis = require("../models/ResumeAnalysis");
const cleanJSON = require("../utils/jsonCleaner");

exports.uploadResume = async (req, res, next) => {
  const resume = await Resume.create({
    user_id: req.user.id,
    file_name: req.file.filename,
    file_path: req.file.path,
  });
  const resumeText = await parseResumeWithPython(req.file.path);
  const aiResponse = await analyzeResume(resumeText);

  const cleaned = cleanJSON(aiResponse);

  const analysis = JSON.parse(cleaned);
  await ResumeAnalysis.create({
    resume_id: resume.id,
    analysis_json: analysis,
  });

  res.json({
    success: true,

    data: analysis,
  });
};
