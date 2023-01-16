const express = require('express')
const userAuth = express.Router()
const { singUpValidation, Signup } = require('../controller/signup')
const { login, loginVerify } = require('../controller/login')
const { userVerify, verify } = require('../controller/auth')
const { logout } = require('../controller/logout')
const { AllUser } = require('../controller/all_user')
userAuth.post('/signup', singUpValidation, Signup)
userAuth.post('/login', loginVerify, login)
userAuth.get('/verify', verify, userVerify) 
userAuth.get('/logout', logout)
userAuth.get('/finduser', AllUser)

module.exports = userAuth