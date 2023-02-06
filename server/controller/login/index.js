const { userModal } = require('../connection')
const jwt = require('jsonwebtoken')
exports.loginVerify = (req, res, next) => {
    const { user, pwd } = req.body;
    const verify = async () => {
        const result = await userModal.findOne({ user, pwd });
        if (result) {
            next();
        } else {
            res.status(409).json({
                status: false,
                message: 'Invalid username or password'
            });
        }
    };
    if (user && pwd) {
        verify();
    } else {
        const error = new Error('Username and password are required');
        res.status(409).json({
            status: false,
            message: error.message
        });
    }
};
exports.login = async (req, res) => {
    try {
        const data = req.body;
        const result = await userModal.findOne({ user: data.user, pwd: data.pwd });
        if (result) {
            const { _id, email, user } = result;
            const token = jwt.sign({ user, email }, process.env.PRIVETKEY);

            res.status(200).json({
                massage: "success",
                status: true,
                status_code: 200,
                token,
                data: { _id, email, user },
            });
        } else {
            res.status(401).json({
                massage: "Invalid username or password",
                status: false,
                status_code: 401,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            massage: "Internal Server Error",
            status: false,
            status_code: 500,
        });
    }
};
