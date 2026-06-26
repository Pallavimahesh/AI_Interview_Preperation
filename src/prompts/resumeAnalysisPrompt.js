const resumePrompt = (resumeText) => `
You are an expert Technical Recruiter and Senior Software Engineer.

Analyze the following resume.

Return ONLY valid JSON.

Schema:

{
  "candidateName":"",
  "email":"",
  "phone":"",
  "experience":{
      "years":"",
      "summary":""
  },
  "skills":{
      "frontend":[],
      "backend":[],
      "database":[],
      "cloud":[],
      "devops":[],
      "programmingLanguages":[]
  },
  "projects":[
      {
          "title":"",
          "description":"",
          "technologies":[]
      }
  ],
  "education":[],
  "strengths":[],
  "weaknesses":[],
  "careerLevel":"",
  "overallScore":0
}

Resume:

${resumeText.text}
`;

module.exports = resumePrompt;
