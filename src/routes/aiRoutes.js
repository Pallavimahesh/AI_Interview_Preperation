const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const validate = require("../middlewares/validate");
const {
  generateQuestionValidation,
} = require("../validators/generateQuestionValidator");
const { generateQuestions } = require("../controllers/aiController");
const upload = require("../config/multer");
const { uploadResume } = require("../controllers/resumeControler");
const { questonValidation } = require("../validators/questionValidator");
router.post(
  "/generate",
  authMiddleware,
  validate,
  questonValidation,
  generateQuestions,
);
router.post("/upload", authMiddleware, upload.single("resume"), uploadResume);
module.exports = router;
