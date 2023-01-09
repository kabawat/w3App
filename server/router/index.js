const express = require('express')
const userAuth = express.Router()
const { singUpValidation, Signup } = require('../controller/signup')
const { login, loginVerify } = require('../controller/login')
const { userVerify, verify } = require('../controller/auth')
const { logout } = require('../controller/logout')
userAuth.post('/signup', singUpValidation, Signup)
userAuth.post('/login', loginVerify, login)
userAuth.get('/verify', verify, userVerify)
userAuth.get('/logout', logout)

module.exports = userAuth