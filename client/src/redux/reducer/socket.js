import socketIO from 'socket.io-client'
const data = ''
const ENDPOINT = 'http://localhost:2917'
const socketController = (state = data, action) => {
    const socket = socketIO(ENDPOINT)
    // socket.on("connect", () => {
    //     console.log(socket);
    // });
    if (action.type === 'JOIN_USER') {
        console.log(action.payload);
    }
    return state
}
export default socketController