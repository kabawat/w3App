const { userModal } = require('../connection')
const jwt = require('jsonwebtoken')
exports.loginVerify = (req, res, next) => {
    const { user, pwd } = req.body
    const verify = async () => {
        const result = await userModal.findOne({ user, pwd })
        if (result) {
            next()
        }
        else {
            res.status(409).json({
                status: false,
                massage: "invalid credentials"
            })
        }
    }
    if (user && pwd) {
        verify()
    } else {
        res.status(409).json({
            status: false,
            massage: "invalid credentials"
        })
    }
}
exports.login = (req, res) => {
    const { user } = req.body
    const token = jwt.sign({ user }, process.env.PRIVETKEY)
    res.cookie('auth', token, {
        httpOnly: true,
        withCredentials: true,
    }).status(200).json({
        massage: 'success',
        status: true,
        status_code: 200
    })
}