const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')

//@description      Get Users
//router            GET /api/users
//@access           Private
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find()

  res.status(200).json(users);
});

//@description      Create User
//router            POST /api/users
//@access           Private
const setUsers = asyncHandler(async (req, res) => {
  if (!req.body.firstname) {
    res.status(400);
    throw new Error("Please add a Firstname");
  }

  const user = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname
  })

  res.status(200).json(user);
});

//@description      Update Users
//router            PUT /api/users/:id
//@access           Private
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if(!user) {
        res.status(400);
        throw new Error("User not found");
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedUser);
});

//@description      Delete User
//router            DELETE /api/users/:id
//@access           Private
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(400);
      throw new Error("User not found");
    }

    await user.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
    getUsers,
    setUsers,
    updateUser,
    deleteUser
}