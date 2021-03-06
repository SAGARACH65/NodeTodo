import HttpStatus from 'http-status-codes';
import * as userService from '../services/userService';

/**
 * Get all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAll(req, res, next) {
  userService
    .getAllUsers()
    .then(data => res.json({ status: 200, ...data }))
    .catch(err => next(err));
}

/**
 * Get a user by its id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchById(req, res, next) {
  userService
    .getUser(req.params.id)
    .then(data => res.json({ status: 200, ...data }))
    .catch(err => next(err));
}

/**
 * Create a new user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function create(req, res, next) {
  userService
    .createUser(req.body)
    .then(() => res.status(HttpStatus.CREATED).json({ status: 200, message: 'user created' }))
    .catch(err => next(err));
}

/**
 * Create access and refresh tokens.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getTokens(req, res, next) {
  userService
    .getUserToken(req)
    .then(data => {
      res.status(HttpStatus.ACCEPTED).json({ status: 200, ...data });
    })
    .catch(err => next(err));
}

/**
 * Login a  user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function login(req, res, next) {
  userService
    .loginUser(req.body)
    .then(data => {
      res.status(HttpStatus.ACCEPTED).json({ ...data });
    })
    .catch(err => {
      next(err);
    });
}

/**
 * Update a user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function update(req, res, next) {
  userService
    .updateUser(req.params.id, req.body)
    .then(data => res.json({ status: 200, ...data }))
    .catch(err => next(err));
}

/**
 * Delete a user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function deleteUser(req, res, next) {
  userService
    .deleteUser(req.params.id)
    .then(data => res.status(HttpStatus.NO_CONTENT).json({ status: 200, ...data }))
    .catch(err => next(err));
}
