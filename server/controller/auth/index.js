const userModal = require('../connection')
const jwt = require('jsonwebtoken')
exports.verify = (req, res, next) => {
    const token = req.cookies.auth
    try {
        if (token) {
            const isValidUser = jwt.verify(token, process.env.PRIVETKEY)
            console.log(isValidUser);
            if (isValidUser) {
                userModal.findOne({ user: isValidUser.user }).then((result) => {
                    next()
                })
            } else {
                throw false
            }
        } else {
            res.status(401).json({
                status: false,
                massage: 'invalid authentication credentials for the requested resource',
            })
        }
    } catch (error) {
        res.status(401).json({
            status: false,
            massage: 'invalid authentication credentials for the requested resource',
        })
    }
}
exports.userVerify = (req, res) => {
    const token = jwt.sign({ user: req.body.user }, process.env.PRIVETKEY)
    try {
        if (token) {
            res.cookie('auth', token, {
                httpOnly: true,
                withCredentials: true
            }).status(200).json({
                massage: 'success',
                status: true,
                status_code: 200
            })
        } else {
            throw false
        }
    } catch (error) {
        res.status(501).json({
            massage: 'internal server error',
            status: false,
        })
    }
}