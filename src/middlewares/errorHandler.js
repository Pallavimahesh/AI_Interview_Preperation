const logger = require("../utils/logger");
const errorHandler = (err, req, res, next) => {
  logger.error({
    message: err.message,

    route: req.originalUrl,

    method: req.method,

    stack: err.stack,
  });
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};
module.exports = errorHandler;
