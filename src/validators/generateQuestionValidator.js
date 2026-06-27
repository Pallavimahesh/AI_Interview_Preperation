const { body } = require("express-validator");

exports.generateQuestionValidation = [
  body("difficulty")
    .isIn(["Easy", "Medium", "Hard"])
    .withMessage("Invalid difficulty"),

  body("count")
    .isInt({ min: 1, max: 50 })
    .withMessage("Count must be between 1 and 50"),

  body("resumeId").optional().isInt(),

  body("skill").optional().isString(),
];
