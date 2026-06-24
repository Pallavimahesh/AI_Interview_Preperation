const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const upload = require("../config/multer");
const { uploadResume } = require("../controllers/resumeControler");

router.post("/upload", authMiddleware, upload.single("resume"), uploadResume);
module.exports = router;
