const data = JSON.parse(localStorage.getItem('chat'))
const initialValue = data ? data : []
const chatMassage = (state = initialValue, action) => {
    if (action.type === 'CHATING') {
        localStorage.setItem('chat', JSON.stringify([...state, action.payload]))
        return [
            ...state,
            action.payload
        ]
    }
    if (action.type === 'DELETE_MSG') {
        localStorage.setItem('chat', JSON.stringify(action.payload))
        return action.payload

    }
    return state
}
export default chatMassage

const currentChat = JSON.parse(localStorage.getItem('currentChat'))
const userData = currentChat ? currentChat : {}
export const receiverProfile = (state = userData, action) => {
    if (action.type === 'RECEIVER_PROFILE') {
        localStorage.setItem('currentChat', JSON.stringify(action.payload))
        return action.payload
    }
    return state
}