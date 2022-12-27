const express = require('express')
const useAuth = express.Router()
const { singUpValidation, Signup } = require('../controller/signup')
useAuth.post('/signup', singUpValidation, Signup)

module.exports = useAuth