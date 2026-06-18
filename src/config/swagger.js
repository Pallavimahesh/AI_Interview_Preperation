const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "AI Interview Prep API",

      version: "1.0.0",

      description: "Backend APIs for AI Interview Platform",
    },

    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },

  apis: ["./src/routes/*.js", "./src/docs/*.js"],
};

module.exports = swaggerJsDoc(options);
