import jwt from 'jsonwebtoken'

const verifyJWT = (token) => {

  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        return reject(err)
      }

      resolve(payload)
    });
  });
}

const generateJWT = (uuid, expiry) => {
  const token = jwt.sign({
    uuid
  }, process.env.JWT_SECRET, {
      expiresIn: expiry,
      algorithm: 'HS256'
    });

  return token;
}

export { verifyJWT, generateJWT }
