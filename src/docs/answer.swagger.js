/**
 * @swagger
 * /api/interview/submit-answer:
 *   post:
 *     summary: Submit an interview answer for AI evaluation
 *     description: Submits the candidate's answer for a question, evaluates it using AI, stores the feedback and score, and returns the saved answer.
 *     tags:
 *       - Interview Answers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - questionId
 *               - answer
 *             properties:
 *               questionId:
 *                 type: integer
 *                 example: 12
 *                 description: ID of the interview question.
 *               answer:
 *                 type: string
 *                 example: Express.js middleware is a function that executes before the request reaches the route handler.
 *                 description: Candidate's answer.
 *     responses:
 *       200:
 *         description: Answer submitted and evaluated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 15
 *                     question_id:
 *                       type: integer
 *                       example: 12
 *                     user_answer:
 *                       type: string
 *                       example: Express.js middleware is a function that executes before the request reaches the route handler.
 *                     ai_feedback_json:
 *                       type: object
 *                       properties:
 *                         score:
 *                           type: integer
 *                           example: 8
 *                         strengths:
 *                           type: array
 *                           items:
 *                             type: string
 *                           example:
 *                             - Good explanation
 *                             - Correct terminology
 *                         improvements:
 *                           type: array
 *                           items:
 *                             type: string
 *                           example:
 *                             - Add more practical examples
 *                         feedback:
 *                           type: string
 *                           example: Overall a good answer with minor improvements needed.
 *                     score:
 *                       type: integer
 *                       example: 8
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *       404:
 *         description: Question not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Question not found
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Internal Server Error
 */
