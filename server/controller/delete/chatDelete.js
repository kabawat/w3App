const { chatModal } = require('../connection')
exports.deleteChat = async (req, res) => {
    try {
        const { chat_id } = req.query;
        const result = await chatModal.deleteOne({ chatID: chat_id });
        res.send(`delete Chat ${result.deletedCount}`);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Something went wrong while deleting the chat' });
    }
};