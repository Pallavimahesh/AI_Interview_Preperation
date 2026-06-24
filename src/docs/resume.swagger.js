/**
 * @swagger
 * /api/resume/upload:
 *   post:
 *     summary: Upload and parse a resume
 *     tags:
 *       - Resume
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - resume
 *             properties:
 *               resume:
 *                 type: string
 *                 format: binary
 *                 description: Resume file (PDF, DOC, DOCX)
 *     responses:
 *       200:
 *         description: Resume parsed successfully
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
 *                     name:
 *                       type: string
 *                       example: John Doe
 *                     email:
 *                       type: string
 *                       example: john.doe@gmail.com
 *                     phone:
 *                       type: string
 *                       example: "+91 9876543210"
 *                     skills:
 *                       type: array
 *                       items:
 *                         type: string
 *                       example:
 *                         - JavaScript
 *                         - Node.js
 *                         - Express.js
 *       400:
 *         description: No file uploaded
 *       500:
 *         description: Internal server error
 */
