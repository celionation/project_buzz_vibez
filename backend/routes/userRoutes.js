const express = require('express')
const router = express.Router()
const { getUsers, setUsers, updateUser, deleteUser } = require('../controllers/userController')

router.route('/').get(getUsers).post(setUsers)
router.route('/:id').put(updateUser).delete(deleteUser)

module.exports = router