import { Router } from 'express';
import * as userController from '../controllers/users';
import { findUser, userValidator, validateAccessToken, validateRefreshToken } from '../validators/userValidator';

const router = Router();

/**
 * GET /api/users
 */
router.get('/', validateAccessToken, userController.fetchAll);

/**
 * POST /api/users/getNewToken
 */
router.post('/getNewToken', validateRefreshToken, userController.getTokens);

/**
 * GET /api/users/:id
 */
router.get('/:id', userController.fetchById);


/**
 * POST /api/users/register
 */
router.post('/register', userValidator, userController.create);

/**
 * POST /api/users/login
 */
router.post('/login', userController.login);

/**
 * PUT /api/users/:id
 */
router.put('/:id', findUser, userValidator, userController.update);

/**
 * DELETE /api/users/:id
 */
router.delete('/:id', findUser, userController.deleteUser);

export default router;
