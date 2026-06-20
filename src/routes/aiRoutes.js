const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { generateQuestions } = require("../controllers/aiController");
router.post("/generate", authMiddleware, generateQuestions);
module.exports = router;
