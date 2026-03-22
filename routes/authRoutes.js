const express = require('express')
const router = express.Router()
const {registerUser  , LogingUser} = require("../features/auths/userAuth")

router.post('/register', registerUser)
router.post('/login', LogingUser)

module.exports = router