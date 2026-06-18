const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("../utils/asyncHandler");
const logger = require("../utils/logger");
exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({
    where: { email },
  });

  if (existingUser) {
    res.status(400).json({
      message: "User already exist",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  logger.info(`New user registered: ${user.email}`);
  res.status(200).json({ message: "User created", userId: user.id });
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: { email },
  });
  if (!user) {
    logger.warn(`Failed login attempt for ${email}`);
    res.status(401).json({
      message: "Invalid credentials",
    });
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    logger.warn(`Failed login attempt for ${email}`);
    res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );
  logger.info(`User logged in: ${email}`);
  console.log("Token", token);
  res.json({
    token,
  });
});

exports.getProfile = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.user.id, {
    attributes: {
      exclude: ["password"],
    },
  });

  res.json(user);
});
