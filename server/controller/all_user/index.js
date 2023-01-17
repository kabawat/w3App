const { userModal } = require('../connection')
exports.AllUser = (req, res) => {
    const getdata = async () => {
        const data = await userModal.find()
        res.send(data)
    }
    getdata()
}