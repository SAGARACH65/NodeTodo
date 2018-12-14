import jwt from 'jsonwebtoken';

/**
 * Verifies a JWT.
 *
 * @param  {string}   token
 * @returns {Promise}
 */
function verifyJWT(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        return reject(err);
      }
      resolve(payload);
    });
  });
}

/**
 * Generates a JWT.
 *
 * @param  {string}   uuid
 * @param  {string}   expiry
 * @returns {String}   Token.
 */
function generateJWT(uuid, expiry) {
  const token = jwt.sign(
    {
      uuid
    },
    process.env.JWT_SECRET,
    {
      expiresIn: expiry,
      algorithm: 'HS256'
    }
  );

  return token;
}

export { verifyJWT, generateJWT };
