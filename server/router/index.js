const express = require('express')
const userAuth = express.Router()
const { singUpValidation, Signup } = require('../controller/signup')
const { login, loginVerify } = require('../controller/login')
const { userVerify, verify } = require('../controller/auth')
userAuth.post('/signup', singUpValidation, Signup)
userAuth.post('/login', loginVerify, login)
userAuth.get('/verify', verify, userVerify)

module.exports = userAuth