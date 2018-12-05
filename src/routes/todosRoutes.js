import { Router } from 'express';
import * as todosController from '../controllers/todos';
import { validateAccessToken } from '../validators/userValidator';

const router = Router();

/**
 * GET /api/todos
 */
router.get('/getAll', validateAccessToken, todosController.fetchAll);

/**
 * POST /api/todos
 */
router.post('/add', validateAccessToken, todosController.create);

/**
 * Delete /api/todos
 */
router.delete('/delete', validateAccessToken, todosController.deleteTodo);

/**
 * PUT /api/todos
 */
router.put('/update', validateAccessToken, todosController.update);

export default router;


