const express = require("express");
const { questonValidation } = require("../validators/questionValidator");
const validate = require("../middlewares/validate");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
console.log(authMiddleware);
const {
  createQuestion,
  getQuestions,
} = require("../controllers/questionController");
console.log("createQuestion:", createQuestion);
router.post(
  "/questions",
  authMiddleware,
  questonValidation,
  validate,
  createQuestion,
);
router.get("/questions", getQuestions);
module.exports = router;
