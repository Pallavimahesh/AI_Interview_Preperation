const { spawn } = require("child_process");
const path = require("path");

const pythonScript = path.join(__dirname, "../parser.py");
const parseResumeWithPython = (filePath) => {
  return new Promise((resolve, reject) => {
    // Step 1: Start Python process
    const pythonProcess = spawn("python", [pythonScript, filePath]);

    let resultData = "";
    let errorData = "";

    // Step 2: Collect stdout (SUCCESS DATA)
    pythonProcess.stdout.on("data", (data) => {
      resultData += data.toString();
    });

    // Step 3: Collect stderr (ERRORS)
    pythonProcess.stderr.on("data", (data) => {
      errorData += data.toString();
    });

    // Step 4: On process end
    pythonProcess.on("close", (code) => {
      if (code !== 0) {
        return reject({
          success: false,
          error: errorData,
        });
      }

      try {
        const parsed = JSON.parse(resultData);

        resolve(parsed);
      } catch (err) {
        reject({
          success: false,
          error: "Invalid JSON from Python",
        });
      }
    });
  });
};

module.exports = {
  parseResumeWithPython,
};
