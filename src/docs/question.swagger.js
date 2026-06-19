/**
 * @swagger
 * /api/questions:
 *   post:
 *     summary: Create a new question
 *     tags:
 *       - Questions
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - skill
 *               - difficulty
 *               - correct_answer
 *             properties:
 *               title:
 *                 type: string
 *                 example: What is JWT?
 *               description:
 *                 type: string
 *                 example: Explain JWT
 *               skill:
 *                 type: string
 *                 example: NodeJS
 *               difficulty:
 *                 type: string
 *                 enum:
 *                   - Easy
 *                   - Medium
 *                   - Hard
 *                 example: Medium
 *               correct_answer:
 *                 type: string
 *                 example: JWT is a stateless token
 *     responses:
 *       201:
 *         description: Question created successfully
 *       400:
 *         description: Validation error
 */
