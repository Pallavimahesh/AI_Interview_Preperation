require("dotenv").config();
const app = require("./app");

const sequelize = require("./config/database");
console.log(process.env.JWT_SECRET);
sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
  });
});
