const express = require("express")
const router = express.Router()
const auth = require("./auth")

router.use("/auth", auth)
router.get("/test", (req, res) => {
  res.send("all good")
})

module.exports = router
