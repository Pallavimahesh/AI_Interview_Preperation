exports.buildResumePrompt = (analysis, difficulty, count) => {
  const skills = analysis.skills;

  return `
You are an expert technical interviewer.

Candidate Profile

Career Level:
${analysis.careerLevel}

Experience:
${analysis.experience.years}

Frontend:
${skills.frontend.join(", ")}

Backend:
${skills.backend.join(", ")}

Database:
${skills.database.join(", ")}

Cloud:
${skills.cloud.join(", ")}

Programming Languages:
${skills.programmingLanguages.join(", ")}

Strengths:
${analysis.strengths.join(", ")}

Generate ${count} ${difficulty} interview questions.

Rules

- Ask questions only from the candidate's skills.
- Prioritize backend and programming languages.
- Include coding and theory.
- Include scenario-based questions when appropriate.
- Return ONLY valid JSON.

Format:

[
 {
   "question":"",
   "skill":"",
   "difficulty":"${difficulty}"
 }
]
`;
};

exports.buildSkillPrompt = (skill, difficulty, count) => {
  return `
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
]`;
};
