import Todos from '../models/todos';

/**
 * Get all todos.
 *
 * @param  {String}  userUUID
 *
 * @returns {Promise}
 */
export function getAll(userUUID) {
  return Todos.where({ userUUID })
    .orderBy('created_at', 'ASC')
    .fetchAll();
}

/**
 * Create new todo.
 *
 * @param  {Object}  todo
 * @param  {string}  userUUID
 *
 *  @returns {Promise}
 */
export function createNew(todo, userUUID) {
  const { title, uuid } = todo;

  return new Todos({
    title,
    userUUID,
    uuid,
    status: 'incomplete'
  }).save();
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
export function update(title, uuid, status) {
  return Todos.where({ uuid }).save({ title, status }, { patch: true });
}

/**
 * Delete a todo.
 *
 * @param  {Number|String}  uuid
 * @returns {Promise}mon
 */
export function remove(uuid) {
  return new Todos({ uuid }).fetch().then(todo => todo.destroy());
}
