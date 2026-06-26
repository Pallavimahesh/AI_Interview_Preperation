require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");
const questionPrompt = require("../prompts/questionPrompt");
const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAi.getGenerativeModel({
  model: "gemini-3.5-flash",
});
const generateQuestions = async (skills, experience, count) => {
  const prompt = questionPrompt(skills, experience, count);
  const result = await model.generateContent(prompt);
  logger.info(`Generating ${count} ${skill} questions`);
  logger.error(`Gemini API Error: ${error.message}`);
  return result.response.text();
};

module.exports = { generateQuestions };
