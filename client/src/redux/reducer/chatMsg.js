// chat 
// const data = JSON.parse(localStorage.getItem('chat'))
const initialValue = ''
export const chatMassage = (state = initialValue, action) => {
    if (action.type === 'CHATING') {
        const chat = JSON.parse(localStorage.getItem([action.payload.receiver]))
        if (chat) {
            localStorage.setItem([action.payload.receiver], JSON.stringify([...chat, action.payload]))
            return [
                ...chat,
                action.payload
            ]
        }
        else {
            localStorage.setItem([action.payload.receiver], JSON.stringify([action.payload]))
            return [
                action.payload
            ]
        }
    }
    if (action.type === 'DELETE_MSG') {
        localStorage.setItem([action.user], JSON.stringify(action.newMsgList))
        return [...action.newMsgList]
    }
    if (action.type === "GET_CHAT") {
        const chat = JSON.parse(localStorage.getItem([action.payload.user]))
        return chat
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
        console.log(action.payload)
        return action.payload
    }
    return state
}