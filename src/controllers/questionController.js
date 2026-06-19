const Question = require("../models/Question");
const asyncHandler = require("../utils/asyncHandler");
const { Op } = require("sequelize");
const logger = require("../utils/logger");
exports.createQuestion = asyncHandler(async (req, res) => {
  const question = await Question.create(req.body);
  logger.info(`Question created`);
  res.status(201).json(question);
});

exports.getQuestions = asyncHandler(async (req, res) => {
  const { skill, difficulty } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const offset = (page - 1) * limit;

  let where = {};

  if (skill) {
    where.skill = skill;
  }

  if (difficulty) {
    where.difficulty = difficulty;
  }
  const questions = await Question.findAndCountAll({ where, limit, offset });
  res.status(200).json({
    totalItems: questions.count,
    totalPages: Math.ceil(questions.count / limit),
    currentPage: page,
    data: questions.rows,
  });
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
exports.updateQuestion = asyncHandler(async (req, res) => {
  const question = await Question.findByPk(req.params.id);

  if (!question) {
    return res.status(404).json({
      message: "Question not found",
    });
  }

  await question.update(req.body);

  res.json(question);
});

exports.deleteQuestion = asyncHandler(async (req, res) => {
  const question = await Question.findByPk(req.params.id);

  if (!question) {
    return res.status(404).json({
      message: "Question not found",
    });
  }

  await question.destroy();

  res.json({
    message: "Deleted successfully",
  });
});
