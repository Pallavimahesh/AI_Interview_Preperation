const questionPrompt = (skills, experience, count) => `
Act as a Senior Software Engineer.

Generate ${count} interview questions on each ${skills} .

Based on ${experience}.

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
