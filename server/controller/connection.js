const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.r8evqrf.mongodb.net/ChatApp?`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const SchemaModal = new mongoose.Schema({
    user: {
        type: String,
        require,
    },
    email: {
        type: String,
        require
    },
    pwd: {
        type: String,
        require
    },
    date: {
        type: Date,
        default: Date.now
    },
})

// user Chat table 
const chatTable = new mongoose.Schema({
    _room: {
        type: String,
        require
    },
    sender: {
        type: String,
        require
    },
    receiver: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const userModal = new mongoose.model('userDetaile', SchemaModal)
const chatModal = new mongoose.model('chatList', chatTable)
module.exports = { userModal, chatModal }
