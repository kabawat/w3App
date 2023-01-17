const express = require('express')
const http = require('http')
const cors = require('cors')
const { Server, Socket } = require('socket.io')
const app = express()
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv').config()
const userAuth = require('./router')


const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})
io.on('connection', (socket) => {
    console.log("socket");
    socket.on('send', (massage) => {
        console.log(massage);
        socket.broadcast.emit('receive', massage)
    })
});


app.use(express.json())
const corsOptions = {
    origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
    ],
    credentials: true,
    exposedHeaders: ["set-cookie"],
};

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(userAuth)
app.get('/', (req, res) => {
    res.send('hello word')
})


server.listen(process.env.PORT, () => {
    console.log(`click here http://localhost:${process.env.PORT}`)
})