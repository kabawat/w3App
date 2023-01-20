const jwt = require('jsonwebtoken')
const { userModal } = require('../connection')
exports.AllUser = (req, res) => {
    const getdata = async () => {
        const data = await userModal.find()
        const filter = data.map((curElem) => {
            const { _id, user, email } = curElem
            return { _id, user, email }
        })
        res.status(200).json(filter)
    }
    getdata()
}

exports.userProfile = (req, res) => {
    const token = req.cookies.auth
    const data = jwt.decode(token)
    if (data) {
        const getData = async () => {
            const result = await userModal.findOne({ user: data.user })
            const { _id, user, email } = result
            const profile = {
                _id,
                user,
                email,
                status: true
            }
            res.status(200).json(profile)
        }
        getData()
    } else {
        res.status(401).json({
            status_code: 401,
            status: false,
            data: {},
            msg: 'unauthorized'
        })
    }

}

exports.chatUserInfo = (req, res) => {
    const getData = async () => {
        const { email } = req.body
        const result = await userModal.findOne({ email })

        if (result) {
            const { email, user } = result
            res.status(200).json({
                status_code: 200,
                status: true,
                data: { email, user },
                msg: `let's chating with ${user}`
            })
        } else {
            res.status(404).json({
                status_code: 404,
                status: false,
                data: {},
                msg: 'Data not found'
            })
        }
    }
    getData()
}