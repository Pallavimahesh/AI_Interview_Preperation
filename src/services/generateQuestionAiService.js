require("dotenv").config();
const logger = require("../utils/logger");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const questionPrompt = require("../prompts/questionPrompt");
const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAi.getGenerativeModel({
  model: "gemini-3.5-flash",
});
const generateQuestions = async (prompt) => {
  const result = await model.generateContent(prompt);
  logger.info(`Generated questions according to prompt`);
  return result.response.text();
};

module.exports = { generateQuestions };
