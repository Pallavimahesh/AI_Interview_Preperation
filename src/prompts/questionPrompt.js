const questionPrompt = (skill, difficulty, count) => `
Act as a Senior Software Engineer.

Generate ${count} interview questions on each ${skill} .

Based on ${difficulty}.

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
module.exports = questionPrompt;
