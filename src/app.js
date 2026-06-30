require("dotenv").config();

const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const requestLogger = require("./middlewares/requestLogger");
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");
const questionRoutes = require("./routes/questionRoutes");
const swaggerUi = require("swagger-ui-express");
const resumeRoutes = require("./routes/resumeRoutes");
const swaggerSpec = require("./config/swagger");
const answerRoutes = require("./routes/answerRoutes");
const app = express();

app.use(cors());

app.use(express.json());
app.use(requestLogger);
app.use("/api/auth", authRoutes);
app.use("/api", questionRoutes);
app.use("/api/questions", aiRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/interview", answerRoutes);
app.use(
  "/api-docs",

  swaggerUi.serve,

  swaggerUi.setup(swaggerSpec),
);
app.use(errorHandler);

module.exports = app;
