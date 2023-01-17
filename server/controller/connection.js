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
    }
})

const userModal = new mongoose.model('userDetaile', SchemaModal)
module.exports = { userModal }