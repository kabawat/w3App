import { io } from 'socket.io-client'
const URL = `http://localhost:2917/`
const socket = io(URL)

const socketController = (state = socket, action) => {
    return state
}
export default socketController