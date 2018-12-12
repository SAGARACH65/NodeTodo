
import User from '../models/user';
import Tokens from '../models/tokens';
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
  return Tokens.where({ token }).fetch();
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

  const {name,username,email}=user;

  return new User({
    name,
    username,
    uuid,
    password,
    email
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


