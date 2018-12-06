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
    .getAllTodos(req.userUUID)
    .then(data => {

      res.json({ status: 200, data: [...data.models] }
      )
    })
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
    .createTodo(req.body, req.userUUID)
    .then(data => res.status(HttpStatus.CREATED).json({ message: 'todo added', status: 200 }))
    .catch(err => next(err));
}

/**
 * Update Todo.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function update(req, res, next) {

  todoService
    .updateTodo(req.body.title, req.body.uuid, req.body.status)
    .then(data => res.status(HttpStatus.CREATED).json({ status: 200, message: 'todo updated' }))
    .catch(err => next(err));
}

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
    .then(data => res.status(HttpStatus.CREATED).json({ status: 200, message: 'todo deleted' }))
    .catch(err => next(err));
}
