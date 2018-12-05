import HttpStatus from 'http-status-codes';
import * as todoService from '../services/todoService';

/**
 * Get all todos.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAll(req, res, next) {
  todoService
    .getAllTodos()
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

/**
 * Create a new todo.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function create(req, res, next) {

  todoService
    .createTodo(req.body,req.decodedToken.username)
    .then(data => res.status(HttpStatus.CREATED).json({ message: 'todo added' }))
    .catch(err => next(err));
}

/**
 * Update Todo.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
// export function update(req, res, next) {

//   todoService
//     .updateTodo(req.body)
//     .then(data => res.status(HttpStatus.CREATED).json({ message: 'todo updated' }))
//     .catch(err => next(err));
// }

/**
 * Delete Todo.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function deleteTodo(req, res, next) {

  todoService
    .deleteTodo(req.body.uuid)
    .then(data => res.status(HttpStatus.CREATED).json({ message: 'todo deleted' }))
    .catch(err => next(err));
}
