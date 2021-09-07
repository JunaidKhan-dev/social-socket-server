const User = require("../../models/user")
const { getHashedPassword } = require("../../helpers/auth")

const registerController = async (req, res) => {
  const { name, email, password, secret } = req.body
  //  validation
  if (!name || !email || !password || password.length < 6 || !secret) {
    return res.status(400).send("Required field are missing")
  }

  const emailExist = await User.findOne({ email })

  if (emailExist) {
    return res.status(400).send("user already exist")
  }

  //  hash the password
  const hashedPassword = await getHashedPassword(password)

  const user = new User({ name, email, password: hashedPassword, secret })

  try {
    await user.save()
    console.log({ user })
    return res.json({
      ok: true,
    })
  } catch (error) {
    console.log("register Error", error)
    return res.status(400).send("something goes wrong!")
  }
}

module.exports = { registerController }
