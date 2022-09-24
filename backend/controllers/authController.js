const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require('../models/userModel')

//@description      Post Auth
//router            POST /api/auth
//@access           Public
const authRegister = asyncHandler(async (req, res) => {
  const { firstname, lastname, username, email, phone, password } = req.body

  if (!firstname || !lastname || !username || !email || !phone || !password) {
    res.status(400)
    throw new Error("Please add all required fields.")
  }

  //check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400)
    throw new Error("User already exists")
  }

  //Hash user Password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    firstname,
    lastname,
    username,
    email,
    phone,
    password: hashedPassword,
    refLink: "nattiref_link",
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400)
    throw new Error("Invalid user data.")
  }
})

//@description      Post Auth
//router            POST /api/auth
//@access           Public
const authLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //check for user email
  const user = await User.findOne({ email });

  //check user password
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid crendentials");
  }
})

//@description      Post Auth
//router            POST /api/auth
//@access           Public
const authGoogle = asyncHandler(async (req, res) => {
  res.json("Google Auth Login&SignUp")
})

//Generate Token JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    })
}

module.exports = {
    authRegister,
    authLogin
}