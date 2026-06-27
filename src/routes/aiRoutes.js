const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  generateQuestionValidation,
} = require("../validators/generateQuestionValidator");
const { generateQuestions } = require("../controllers/aiController");
const upload = require("../config/multer");
const { uploadResume } = require("../controllers/resumeControler");
router.post(
  "/generate",
  authMiddleware,
  generateQuestionValidation,
  generateQuestions,
);
router.post("/upload", authMiddleware, upload.single("resume"), uploadResume);
module.exports = router;
