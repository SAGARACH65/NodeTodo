import { Router } from 'express';
import * as todosController from '../controllers/todos';
import { validateAccessToken } from '../validators/userValidator';

const router = Router();

/**
 * GET /api/todos
 */
router.get('/todos', validateAccessToken, todosController.fetchAll);

/**
 * POST /api/todos
 */
router.post('/todos', validateAccessToken, todosController.create);

/**
 * Delete /api/todos
 */
router.delete('/todos', validateAccessToken, todosController.deleteTodo);

/**
 * PUT /api/todos
 */
router.put('/todos', validateAccessToken, todosController.update);

export default router;
