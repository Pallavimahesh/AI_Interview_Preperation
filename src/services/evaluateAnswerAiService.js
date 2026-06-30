const evaluationPrompt = require("../prompts/evaluationPromt");
const evaluateAnswer = async (question, answer, skill, difficulty) => {
  const prompt = evaluationPrompt(question, answer, skill, difficulty);

  const result = await model.generateContent(prompt);

  const response = result.response.text();

  return JSON.parse(
    response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim(),
  );
};
module.exports = evaluateAnswer;
