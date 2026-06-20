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
 *     summary: Get questions with optional filters and pagination
 *     tags:
 *       - Questions
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: skill
 *         required: false
 *         schema:
 *           type: string
 *         description: Filter questions by skill
 *         example: NodeJS
 *
 *       - in: query
 *         name: difficulty
 *         required: false
 *         schema:
 *           type: string
 *           enum:
 *             - Easy
 *             - Medium
 *             - Hard
 *         description: Filter questions by difficulty
 *         example: Medium
 *
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *
 *       - in: query
 *         name: limit
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of records per page
 *
 *     responses:
 *       200:
 *         description: Questions retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalItems:
 *                   type: integer
 *                   example: 25
 *                 totalPages:
 *                   type: integer
 *                   example: 3
 *                 currentPage:
 *                   type: integer
 *                   example: 1
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       title:
 *                         type: string
 *                         example: What is JWT?
 *                       description:
 *                         type: string
 *                         example: Explain JWT
 *                       skill:
 *                         type: string
 *                         example: NodeJS
 *                       difficulty:
 *                         type: string
 *                         example: Medium
 *                       correct_answer:
 *                         type: string
 *                         example: JWT is a stateless token
 *
 *       401:
 *         description: Unauthorized
 *
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
/**
 * @swagger
 * /api/questions/{id}:
 *   delete:
 *     summary: Delete a question by ID
 *     tags:
 *       - Questions
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the question to delete
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Question deleted successfully
 *       404:
 *         description: Question not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /api/questions/generate:
 *   post:
 *     summary: Generate interview questions using AI
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
 *               - skill
 *               - difficulty
 *               - count
 *             properties:
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
 *               count:
 *                 type: integer
 *                 minimum: 1
 *                 example: 5
 *     responses:
 *       200:
 *         description: Questions generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         example: What is JWT?
 *                       description:
 *                         type: string
 *                         example: Explain the purpose of JWT in authentication.
 *                       difficulty:
 *                         type: string
 *                         example: Medium
 *       400:
 *         description: Invalid request data
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
