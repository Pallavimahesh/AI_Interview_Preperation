require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");
console.log("Key loaded:", !!process.env.GEMINI_API_KEY);
console.log("Key prefix:", process.env.GEMINI_API_KEY?.substring(0, 8));
const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAi.getGenerativeModel({
  model: "gemini-3.5-flash",
});
const generateQuestions = async (skill, difficulty, count) => {
  const prompt = `
Act as a Senior Software Engineer.

Generate ${count} ${skill} interview questions.

Difficulty: ${difficulty}.

Requirements:
- Real interview style
- No duplicates
- Focus on backend concepts
- Return valid JSON only

Format:

[
 {
   "question":"..."
 }
]
 `;
  const result = await model.generateContent(prompt);
  logger.info(`Generating ${count} ${skill} questions`);
  logger.error(`Gemini API Error: ${error.message}`);
  return result.response.text();
};

module.exports = { generateQuestions };
