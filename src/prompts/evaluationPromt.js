const evaluationPrompt = (
  question,
  answer,
  skill,
  difficulty,
) => `You are a Senior Technical Interviewer.

Evaluate the candidate's answer.

Question

${question}

Candidate Answer

${answer}

Skill

${skill}

Difficulty

${difficulty}

Evaluate:

1. Technical correctness
2. Depth of knowledge
3. Communication
4. Completeness
5. Practical understanding

Return ONLY JSON.

{
"score":0,
"maxScore":10,
"correctness":0,
"technicalDepth":0,
"communication":0,
"strengths":[],
"weaknesses":[],
"idealAnswer":"",
"feedback":""
}`;

module.exports = evaluationPrompt;
