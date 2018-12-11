
import User from '../models/user';

/**
 * Get a user
 *
 *@param  {number}  id
 * @return {Promise}
 */
export function getOne(id) {
  return new User({ id }).fetch();
}

/**
 *  get user from token
  * @param  {string}  token
 *
 *  @return {Promise}
 */
export function getuserFromToken(token) {
  return User.where({ token }).fetch();
}

/**
 * create a user.
 *
 * @param  {object}  user
 * @param  {string}  uuid
 * @param  {string}  password
 *
 * @return {Promise}
 */
export function create(user, uuid, password) {
  return new User({
    name: user.name,
    username: user.username,
    uuid,
    password,
    email: user.email
  }).save();
}

/**
 * get user form username
 *
 * @param  {String}  username
 * @return {Promise}mon
 */
export function getUserFromUsername(username) {

  return User.where({ username }).fetch();

}


