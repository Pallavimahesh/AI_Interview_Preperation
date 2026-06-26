const generateQuestionAiService = require("../services/generateQuestionAiService");

exports.generateQuestions = async (req, res) => {
  const { skill, difficulty, count } = req.body;
  const result = await generateQuestionAiService.generateQuestions(
    skill,
    difficulty,
    count,
  );
  res.json({
    success: true,
    data: result,
  });
};
