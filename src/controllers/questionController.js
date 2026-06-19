const Question = require("../models/Question");
const asyncHandler = require("../utils/asyncHandler");
const logger = require("../utils/logger");
exports.createQuestion = asyncHandler(async (req, res) => {
  const question = await Question.create(req.body);
  logger.info(`Question created`);
  res.status(201).json(question);
});

exports.getQuestions = asyncHandler(async (req, res) => {
  const questions = await Question.findAll();

  res.status(200).json(questions);
});

exports.getQuestionById = asyncHandler(async (req, res) => {
  const question = await Question.findByPk(req.params.id);

  if (!question) {
    return res.status(404).json({
      message: "Question not found",
    });
  }

  res.status(200).json(question);
});
