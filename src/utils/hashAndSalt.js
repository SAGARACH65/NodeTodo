import bcrypt from 'bcrypt';
const saltRounds = 10;

/**
 * Hashes a passowrd.
 *
 * @param  {string}   password
 * @returns {Promise}
 */
function generateHash(password) {
  // return bcrypt.hash(password, saltRounds).then(hash => {
  //   return hash;
  // }).catch(err => console.log(err))

  return new Promise(resolve => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        resolve(hash);
      });
    });
  });
}

export default generateHash;
