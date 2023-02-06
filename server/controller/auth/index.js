const { userModal } = require('../connection')
const jwt = require('jsonwebtoken')
exports.verify = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                status: false,
                message: "invalid authentication credentials for the requested resource"
            });
        }

        const isValidUser = jwt.verify(token, process.env.PRIVETKEY);
        if (!isValidUser) {
            throw new Error("invalid authentication credentials for the requested resource");
        }

        const user = await userModal.findOne({ user: isValidUser.user });
        if (!user) {
            throw new Error("invalid authentication credentials for the requested resource");
        }

        next();
    } catch (error) {
        return res.status(401).json({
            status: false,
            message: error.message
        });
    }
};
exports.userVerify = async (req, res) => {
    try {
        const requestToken = req.headers.authorization;
        const decoded = jwt.decode(requestToken);
        const { user, email } = decoded;
        const token = jwt.sign({ user, email }, process.env.PRIVETKEY);
        if (!token) {
            throw new Error('Failed to generate token');
        }
        res.status(200).json({
            message: 'success',
            status: true,
            status_code: 200,
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(501).json({
            message: 'internal server error',
            status: false,
        });
    }
}
