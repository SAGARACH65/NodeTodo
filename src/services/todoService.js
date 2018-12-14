import { getAll, createNew, update, remove } from '../DAO/todoDAO';

/**
 * Get all todos.
 *
 * @param  {String}  userUUID
 *
 * @returns {Promise}
 */
export function getAllTodos(userUUID) {
  return getAll(userUUID);
}

/**
 * Create new todo.
 *
 * @param  {Object}  todo
 * @param  {string}  userUUID
 *
 * @returns {Promise}
 */
export function createTodo(todo, userUUID) {
  return createNew(todo, userUUID);
}

/**
 * Update a todo.
 *
 * @param  {string}  title
 * @param  {string}  uuid
 * @param  {string}  status
 *
 * @returns {Promise}
 */
export function updateTodo(title, uuid, status) {
  return update(title, uuid, status);
}

/**
 * Delete a todo.
 *
 * @param  {Number|String}  uuid
 * @returns {Promise}mon
 */
export function deleteTodo(uuid) {
  return remove(uuid);
}
