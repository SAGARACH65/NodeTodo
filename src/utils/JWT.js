import jwt from 'jsonwebtoken'

/**
 * verifies a JWT
 *
 * @param  {string}   token
 * @return {Promise}
 */
function verifyJWT(token) {

  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        return reject(err)
      }
      resolve(payload)
    });
  });
}

/**
 * generates a JWT
 *
 * @param  {string}   uuid
 * @param  {string}   expiry
 * @return {String}   token
 */
function generateJWT(uuid, expiry) {
  const token = jwt.sign({
    uuid
  }, process.env.JWT_SECRET, {
      expiresIn: expiry,
      algorithm: 'HS256'
    });

  return token;
}

export { verifyJWT, generateJWT }
