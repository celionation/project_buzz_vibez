const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please add a Firstname value."],
    },
    lastname: {
      type: String,
      required: [true, "Please add a Lastname value."],
    },
    username: {
      type: String,
      required: [true, "Please add a Username value."],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please add a Email value."],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Please add a Phone value."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a Password value."],
    },
    role: {
      type: String,
      required: [true, 'Please add role.'],
      default: 'guests'
    },
    refferedUsers: {
      type: [String]
    },
    refLink: {
      type: String,
      unique: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema)