const express = require('express')
const router = express.Router()
const { registerUser, LogingUser } = require('../auths/userAuth')

router.post('/register', registerUser)
router.post('/login', LogingUser)

module.exports = router