const InterviewQuestions = require("../models/InterviewQuestions");
const InterviewAnswers = require("../models/InterviewAnswers");
const evaluateAnswer = require("../services/evaluateAnswerAiService");
exports.submitAnswer = async (req, res) => {
  const { questionId, answer } = req.body;

  const question = await InterviewQuestions.findByPk(questionId);

  if (!question) {
    return res.status(404).json({
      success: false,
      message: "Question not found",
    });
  }

  const evaluation = await evaluateAnswer(
    question.question,
    answer,
    question.skill,
    question.difficulty,
  );

  const savedAnswer = await InterviewAnswer.create({
    question_id: questionId,

    user_answer: answer,

    ai_feedback_json: evaluation,

    score: evaluation.score,
  });

  return res.json({
    success: true,

    data: savedAnswer,
  });
};
