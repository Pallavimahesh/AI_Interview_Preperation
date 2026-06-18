require("dotenv").config();
const app = require("./app");
const logger = require("./utils/logger");
const sequelize = require("./config/database");
console.log(process.env.JWT_SECRET);
sequelize
  .sync()
  .then(() => {
    logger.info("Database Connected");
    app.listen(process.env.PORT, () => {
      logger.info(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    logger.error(`Database connection failed: ${err.message}`);
  });
