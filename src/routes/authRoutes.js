const express = require("express");

const router = express.Router();
const {
  registerValidation,
  loginValidation,
} = require("../validators/authValidator");
const validate = require("../middlewares/validate");
const {
  register,
  login,
  getProfile,
} = require("../controllers/authController");

const authMiddleware = require("../middlewares/authMiddleware");

router.post("/register", registerValidation, validate, register);

router.post("/login", loginValidation, validate, login);

router.get("/profile", authMiddleware, getProfile);

module.exports = router;
