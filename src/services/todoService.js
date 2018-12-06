import Todos from '../models/todos';
const uuidv1 = require('uuid/v1');

/**
 * Get all todos.
 *
 * @return {Promise}
 */
export function getAllTodos(userUUID) {


  return Todos.where({ userUUID }).fetchAll();
}

/**
 * Create new todo.
 *
 * @param  {Object}  user
 * @return {Promise}
 */
export function createTodo(todo, userUUID) {
  return new Todos({
    title: todo.title,
    userUUID,
    uuid: uuidv1(),
    status: 'incomplete'
  }).save();

}

/**
 * Update a todo.
 *
 * @param  {Object}  user
 * @return {Promise}
 */
export function updateTodo(title, uuid, status) {
  return Todos.where({ uuid }).save({ title, status }, { patch: true })

}

/**
 * Delete a todo.
 *
 * @param  {Number|String}  uuid
 * @return {Promise}mon
 */
export function deleteTodo(uuid) {
  return new Todos({ uuid }).fetch().then(todo => todo.destroy());
}

