import { Router } from 'express';
import * as userController from '../controllers/users';
import { findUser, userValidator, validateAccessToken, validateRefreshToken } from '../validators/userValidator';

const router = Router();

/**
 * GET /api/users
 */
router.get('/users', validateAccessToken, userController.fetchAll);

/**
 * POST /api/users/getNewToken
 */
router.get('/users/getNewToken', validateRefreshToken, userController.getTokens);

/**
 * GET /api/users/:id
 */
router.get('/users/:id', userController.fetchById);

/**
 * POST /api/users/register
 */
router.post('/users/register', userValidator, userController.create);

/**
 * POST /api/users/login
 */
router.post('/users/login', userController.login);

/**
 * PUT /api/users/:id
 */
router.put('/users/:id', findUser, userValidator, userController.update);

/**
 * DELETE /api/users/:id
 */
router.delete('/users/:id', findUser, userController.deleteUser);

export default router;
