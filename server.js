const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")
require("dotenv").config()
const routes = require("./routes")

const app = express()

// DB
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(`DB connection Error ${err}`))

// middleware

app.use(express.json({ limit: "5mb" }))
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
)

// all routes
app.use("/api", routes)
const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`server is running at PORT ${port}`)
})
