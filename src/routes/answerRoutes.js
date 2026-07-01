const express = require("express");
const router = express.Router();
console.log("answerRoutes loaded");

const { submitAnswer } = require("../controllers/answerController");
const {
  completeInterviewSession,
} = require("../controllers/sessionController");
router.post("/submit-answer", submitAnswer);
router.post("/complete-session", completeInterviewSession);
module.exports = router;
