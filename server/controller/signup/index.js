const { userModal } = require('../connection')
exports.singUpValidation = async (req, res, next) => {
    try {
        const { user, email } = req.body
        if (!user || !email) {
            res.status(400).json({
                status: false,
                massage: 'User and email are required fields'
            });
            return;
        }
        const isEmail = await userModal.findOne({ email });
        const isUser = await userModal.findOne({ user });
        if (isEmail) {
            res.status(409).json({
                status: false,
                massage: 'Email id already exists'
            });
            return;
        }
        if (isUser) {
            res.status(409).json({
                status: false,
                massage: 'User id already exists'
            });
            return;
        }
        next();
    } catch (error) {
        res.status(500).json({
            status: false,
            massage: 'Something went wrong. Please try again later'
        });
    }
};
exports.Signup = async (req, res) => {
    try {
        const { user, email, pwd } = req.body
        const DateModal = new userModal({
            user, email, pwd
        })
        await DateModal.save()
        res.status(200).json({
            status: true,
            massage: "Registration Success"
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            massage: "Registration Failed",
            error: error.message
        })
    }
}