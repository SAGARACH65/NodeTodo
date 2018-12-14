import User from '../models/user';
import Tokens from '../models/tokens';

/**
 * Get a user.
 *
 * @param  {Number} id
 * @returns {Promise}
 */
export function getOne(id) {
  return new User({ id }).fetch();
}

/**
 * Get user from token.
 *
 * @param  {string}  token
 *
 * @returns {Promise}
 */
export function getuserFromToken(token) {
  return Tokens.where({ token }).fetch();
}

/**
 * Create a user.
 *
 * @param  {object}  user
 * @param  {string}  uuid
 * @param  {string}  password
 *
 * @returns {Promise}
 */
export function create(user, uuid, password) {
  const { name, username, email } = user;

  return new User({
    name,
    username,
    uuid,
    password,
    email
  }).save();
}

/**
 * Get user form username.
 *
 * @param  {String}  username
 * @returns {Promise}mon
 */
export function getUserFromUsername(username) {
  return User.where({ username }).fetch();
}
