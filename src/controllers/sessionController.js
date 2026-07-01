const InterviewSessions = require("../models/InterviewSessions");
const InterviewAnswers = require("../models/InterviewAnswers");
const InterviewQuestions = require("../models/InterviewQuestions");
exports.completeInterviewSession = async (req, res) => {
  try {
    const { sessionId } = req.body;

    // Find session
    const session = await InterviewSessions.findByPk(sessionId);

    if (!session) {
      return res.status(404).json({
        success: false,
        message: "Interview session not found",
      });
    }

    const questions = await InterviewQuestions.findAll({
      where: {
        session_id: sessionId,
      },
      include: [
        {
          model: InterviewAnswers,
          attributes: ["user_answer", "score"],
          required: false,
        },
      ],
    });

    const totalQuestions = questions.length;

    const answeredQuestions = questions.filter((question) => {
      return (
        question.interview_answer &&
        question.interview_answer.user_answer &&
        question.interview_answer.user_answer.trim() !== ""
      );
    }).length;
    const status =
      answeredQuestions === totalQuestions ? "Completed" : "In Progress";

    const totalScore = questions.reduce((sum, question) => {
      return sum + (question.interview_answer?.score || 0);
    }, 0);

    const averageScore =
      answeredQuestions > 0
        ? Number((totalScore / answeredQuestions).toFixed(2))
        : 0;

    // Update session
    session.average_score = averageScore;
    session.status = "Completed";
    session.completed_at = new Date();

    await session.save();

    return res.status(200).json({
      success: true,
      message: "Interview completed successfully",
      data: {
        sessionId,
        totalQuestions: questions.length,
        totalScore,
        averageScore,
        status: session.status,
      },
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
