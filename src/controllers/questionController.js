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

  res.json(questions);
});
