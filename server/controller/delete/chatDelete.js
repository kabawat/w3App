const { chatModal } = require('../connection')
exports.deleteChat = (req, res) => {
    const getOperation = async () => {
        const { _room } = req.query
        const result = await chatModal.remove({ _room })
        res.send(`delete room ${result.deletedCount}`)
    }
    getOperation()
}