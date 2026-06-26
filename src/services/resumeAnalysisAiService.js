require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const resumePrompt = require("../prompts/resumeAnalysisPrompt");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const analyzeResume = async (resumeText) => {
  const prompt = resumePrompt(resumeText);

  const result = await model.generateContent(prompt);

  return result.response.text();
};

module.exports = {
  analyzeResume,
};
