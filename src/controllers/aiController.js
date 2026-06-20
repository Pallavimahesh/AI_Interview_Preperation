const aiService = require("../services/aiService");
exports.generateQuestions = async (req, res) => {
  const { skill, difficulty, count } = req.body;
  const result = await aiService.generateQuestions(skill, difficulty, count);
  res.json({
    success: true,
    data: result,
  });
};
