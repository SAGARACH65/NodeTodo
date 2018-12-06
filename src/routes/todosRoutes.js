import { Router } from 'express';
import * as todosController from '../controllers/todos';
import { validateAccessToken } from '../validators/userValidator';

const router = Router();

/**
 * GET /api/todos
 */
router.get('/', validateAccessToken, todosController.fetchAll);

/**
 * POST /api/todos
 */
router.post('/', validateAccessToken, todosController.create);

/**
 * Delete /api/todos
 */
router.delete('/', validateAccessToken, todosController.deleteTodo);

/**
 * PUT /api/todos
 */
router.put('/', validateAccessToken, todosController.update);

export default router;


