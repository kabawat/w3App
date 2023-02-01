// chat 
const data = JSON.parse(localStorage.getItem('chat'))
const initialValue = data ? data : []
export const chatMassage = (state = initialValue, action) => {
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

// current chat 
export const receiverProfile = (state = '', action) => {
    if (action.type === 'RECEIVER_PROFILE') {
        return action.payload
    }
    return state
}

//all chat list
export const chatContactList = (state = [], action) => {
    if (action.type === 'CHAT_CONTACT') {
        return action.payload
    }
    return state
}