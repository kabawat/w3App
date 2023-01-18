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
    const login_Action = async () => {
        const data = (req.body);
        const result = await userModal.findOne({ user: data.user, pwd: data.pwd })
        const { _id, email, user } = result
        const token = jwt.sign({ user }, process.env.PRIVETKEY)
        res.cookie('auth', token, {
            httpOnly: true,
            withCredentials: true,
        }).status(200).json({
            massage: 'success',
            status: true,
            status_code: 200,
            data: { _id, email, user }
        })
    }
    login_Action()
}