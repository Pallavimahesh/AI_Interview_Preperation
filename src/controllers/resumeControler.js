const { parseResumeWithPython } = require("../services/resumeService");

exports.uploadResume = async (req, res) => {
  const filePath = req.file.path;

  const parsedData = await parseResumeWithPython(filePath);

  res.json({
    success: true,
    data: parsedData,
  });
};
