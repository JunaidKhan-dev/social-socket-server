const mongoose = require("mongoose")

const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
    },
    email: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
      max: 12,
    },
    secret: {
      type: String,
      trim: true,
      require: true,
    },
    about: {},
    photo: {
      type: String,
    },
    following: [{ type: Schema.ObjectId, ref: "User" }],
    followers: [{ type: Schema.ObjectId, ref: "User" }],
  },
  { timestamps: true }
)

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel
