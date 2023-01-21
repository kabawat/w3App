const { chatModal, userModal } = require('../connection')

// create room 
exports.newchat = (req, res) => {
    const { _room, sender, receiver, senderUser, receiverUser } = req.body
    if (_room && sender && receiver) {
        const findData = async () => {
            const sendUser = await userModal.findOne({ email: sender })
            const recUser = await userModal.findOne({ email: receiver })

            const existsSender = await chatModal.findOne({ sender })
            const existsReceiver = await chatModal.findOne({ receiver })
            if (!sendUser || !recUser) {
                res.status(409).json({
                    status_code: 409,
                    status: false,
                    data: {},
                    msg: 'invalid credentials'
                })
            } else {
                const newChat = new chatModal({
                    _room: _room,
                    sender: sender,
                    receiver: receiver,
                })
                newChat.save()
                res.status(200).json({
                    status_code: 200,
                    status: true,
                    data: { ...req.body },
                    msg: 'room created'
                })
            }
        }
        findData()
    } else {
        res.status(409).json({
            status_code: 409,
            status: false,
            data: {},
            msg: 'invalid credentials'
        })
    }
}

// fetch chat Data 
exports.chatList = (req, res) => {
    const getdata = async () => {
        const { sender } = req.query
        const chatsUsers = await chatModal.find({ sender })
        if (chatsUsers) {
            res.status(200).json({
                status_code: 200,
                status: true,
                data: chatsUsers,
                msg: 'fetch data Successfull'
            })
        } else {
            res.status(404).json({
                status_code: 404,
                status: false,
                data: chatsUsers,
                msg: 'data not found'
            })
        }
    }
    getdata()
}