const { body } = require("express-validator");

exports.questonValidation = [
  body("title").notEmpty().withMessage("Name is required"),
  body("skill").notEmpty().withMessage("Name is required"),
  body("difficulty")
    .notEmpty()
    .withMessage("Difficulty is required")
    .isIn(["Easy", "Medium", "Hard"])
    .withMessage("Difficulty must be Easy, Medium, or Hard"),
];
