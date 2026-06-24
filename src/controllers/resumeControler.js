const { parseResumeWithPython } = require("../services/resumeService");

exports.uploadResume = async (req, res) => {
  console.log("controller");
  const filePath = req.file.path;

  const parsedData = await parseResumeWithPython(filePath);

  res.json({
    success: true,
    data: parsedData,
  });
};
