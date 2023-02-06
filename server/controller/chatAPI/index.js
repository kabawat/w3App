const { chatModal, userModal, socketModal } = require('../connection')
// create new Chat 
async function processRequest(req, res) {
    const { sender, receiver } = req.body;
    try {
        // find sender 
        const isSender = await userModal.findOne({ user: sender });
        if (isSender) {
            // find receiver 
            const isReceiver = await userModal.findOne({ user: receiver });
            if (isReceiver) {
                // check duplicate data
                const isValid = await chatModal.findOne({ sender, receiver });
                if (isValid == null) {
                    // find socket id
                    const socketData = await socketModal.findOne({ user: receiver })
                    const newChat = new chatModal({
                        chatID: socketData[receiver],
                        sender: sender,
                        receiver: receiver,
                    })
                    const respoce = await newChat.save()
                    if (respoce) {
                        const { sender, receiver, date, chatID } = respoce
                        res.status(200).json({
                            status_code: 200,
                            status: true,
                            data: { sender, receiver, date, chatID },
                            message: 'Chat created'
                        })
                    } else {
                        throw new Error('something went wrong')
                    }

                } else {
                    throw new Error('Chat alreay exists');
                }
            } else {
                throw new Error('Invalid receiver');
            }
        } else {
            throw new Error('Invalid sender');
        }
    } catch (error) {
        res.status(409).json({
            status_code: 409,
            status: false,
            data: {},
            message: error.message
        });
    }
}

exports.newchat = (req, res) => {
    const { sender, receiver } = req.body
    if (sender && receiver) {
        processRequest(req, res)
    } else {
        res.status(409).json({
            status_code: 409,
            status: false,
            data: {},
            message: 'invalid credentials'
        })
    }
}

// fetch chat Data 
exports.chatList = (req, res) => {
    const getdata = async () => {
        try {
            const chatsUsers = await chatModal.find({ sender: req.query.sender })
            const chatData = chatsUsers.map(curChat => {
                const { chatID, sender, receiver, date } = curChat
                return { chatID, sender, receiver, date }
            })
            if (chatsUsers) {
                res.status(200).json({
                    status_code: 200,
                    status: true,
                    data: chatData,
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
        } catch (error) {
            console.error(error)
            res.status(500).json({
                status_code: 500,
                status: false,
                msg: 'Something went wrong, please try again later'
            })
        }
    }
    getdata()

}