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

/**
 * @swagger
 * /api/questions:
 *   get:
 *     summary: Fetch all questions
 *     tags:
 *       - Questions
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of questions retrieved successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/questions/{id}:
 *   get:
 *     summary: Get question by id
 *     tags:
 *       - Questions
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Question ID
 *         example: 1
 *     responses:
 *       200:
 *         description: question retrieved successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/questions/{id}:
 *   patch:
 *     summary: Update a question
 *     tags:
 *       - Questions
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               skill:
 *                 type: string
 *               difficulty:
 *                 type: string
 *                 enum: [Easy, Medium, Hard]
 *               correct_answer:
 *                 type: string
 *     responses:
 *       200:
 *         description: Question updated successfully
 *       404:
 *         description: Question not found
 */
