/**
 * @swagger
 * /api/interview/complete-session:
 *   post:
 *     summary: Complete an interview session
 *     tags:
 *       - Interview Session
 *     description: Calculates the overall interview score from all submitted answers and marks the interview session as completed.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sessionId
 *             properties:
 *               sessionId:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       200:
 *         description: Interview completed successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Interview completed successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     sessionId:
 *                       type: integer
 *                       example: 5
 *                     totalQuestions:
 *                       type: integer
 *                       example: 10
 *                     totalScore:
 *                       type: integer
 *                       example: 74
 *                     averageScore:
 *                       type: number
 *                       example: 7.4
 *                     status:
 *                       type: string
 *                       example: Completed
 *                     completedAt:
 *                       type: string
 *                       format: date-time
 *       400:
 *         description: No answers found.
 *       404:
 *         description: Interview session not found.
 *       500:
 *         description: Internal Server Error.
 */
