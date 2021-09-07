const bcrypt = require("bcrypt")

const getHashedPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err)
      }
      bcrypt.hash(password, salt, (err, hashedPassword) => {
        if (err) {
          reject(err)
        }
        resolve(hashedPassword)
      })
    })
  })
}

const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashPassword)
}

module.exports = {
  getHashedPassword,
  comparePassword,
}
