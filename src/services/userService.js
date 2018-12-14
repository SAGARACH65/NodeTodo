import Boom from 'boom';
import bcrypt from 'bcrypt';
import uuidv1 from 'uuid/v1';
import Tokens from '../models/tokens';
import { generateJWT } from '../utils/JWT';
import generateHash from '../utils/hashAndSalt';
import { getOne, getuserFromToken, getUserFromUsername, create } from '../DAO/userDAO';
import { TOKENIZATION_SUCCESSFUL, USER_NOT_FOUND, LOGIN_SUCCESSFUL, INVALID_PASSWORD } from '../constants/messages';

/**
 * Get a user.
 *
 * @param  {Number|String}  id
 * @returns {Promise}
 */
export function getUser(id) {
  return getOne(id).then(user => {
    if (!user) {
      throw Boom.notFound(USER_NOT_FOUND);
    }

    return user;
  });
}

/**
 * Get a user from refreshToken.
 *
 * @param  {Object}  req
 * @returns {Promise}
 */
export function getUserFromRefreshToken(req) {
  return getuserFromToken(req.headers['refresh-token']);
}

/**
 * Create new user.
 *
 * @param  {Object}  user
 * @returns {Promise}
 */
export async function createUser(user) {
  const password = await generateHash(user.password);

  return create(user, uuidv1(), password);
}

/**
 * Returns new access token.
 *
 * @param  {Object}  req
 * @returns {Promise}
 */
export async function getUserToken(req) {
  const user = await getUserFromRefreshToken(req);

  const accessToken = generateJWT(user.attributes.userUUID, process.env.ACCESS_TOKEN_VALIDITY);

  return new Promise(resolve => {
    resolve({ accessToken, message: TOKENIZATION_SUCCESSFUL });
  });
}

/**
 * Login a  user.
 *
 * @param  {Object}  user
 * @returns {Promise}
 */
export function loginUser(user) {
  return new Promise(async (resolve, reject) => {
    const USER = await getUserFromUsername(user.username);
    const accessToken = generateJWT(USER.get('uuid'), process.env.ACCESS_TOKEN_VALIDITY);
    const refreshToken = generateJWT(USER.get('uuid'), process.env.REFRESH_TOKEN_VALIDITY);

    if (!USER) {
      return reject({ isUserNotFound: true });
    }

    bcrypt.compare(user.password, USER.get('password'), async function(err, match) {
      if (!match) {
        resolve({ message: INVALID_PASSWORD, status: 401 });
      } else {
        const timeStamp = Math.round(new Date().getTime() / 1000) + parseInt(process.env.REFRESH_TOKEN_VALIDITY);

        await new Tokens({ token: refreshToken, userUUID: USER.get('uuid'), deviceId: 1, expiry: timeStamp }).save();

        resolve({ accessToken, refreshToken, message: LOGIN_SUCCESSFUL, status: 200 });
      }
    });
  });
}
