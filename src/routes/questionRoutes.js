const express = require("express");
const { questonValidation } = require("../validators/questionValidator");
const validate = require("../middlewares/validate");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  createQuestion,
  getQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/questionController");
router.post(
  "/questions",
  authMiddleware,
  questonValidation,
  validate,
  createQuestion,
);
router.get("/questions", getQuestions);
router.get("/questions/:id", getQuestionById);
router.patch("/questions/:id", updateQuestion);
router.delete("/questions/:id", deleteQuestion);
module.exports = router;
