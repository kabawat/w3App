// chat 
// const data = JSON.parse(localStorage.getItem('chat'))
const initialValue = ''
export const chatMassage = (state = initialValue, action) => {
    if (action.type === 'CHATING') {
        const oldData = JSON.parse(localStorage.getItem([action.payload.receiver]))
        if (oldData !== null) {
            localStorage.setItem([action.payload.receiver], JSON.stringify([...oldData, action.payload]))
            return [
                ...oldData,
                action.payload
            ]
        } else {
            localStorage.setItem([action.payload.receiver], JSON.stringify([action.payload]))
            return [
                action.payload
            ]
        }
    }

    if (action.type === 'DELETE_MSG') {
        localStorage.setItem([action.payload[0].receiver], JSON.stringify(action.payload))
        return [...action.payload]
    }

    if (action.type === 'GET_CHAT') {
        const chat = JSON.parse(localStorage.getItem(action.payload))
        return chat
    }

    if (action.type === 'DELETE_CHAT') {
        localStorage.removeItem([action.payload])
        return state
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

// create new chat when user recieve first masssage
const first_value = ''
export const chatNewContact = (state = first_value, action) => {
    if (action.type === 'NEW_CHAT') {
        const oldMsg = JSON.parse(localStorage.getItem([action.payload.receiver]))
        if (oldMsg !== null) {
            localStorage.setItem([action.payload.receiver], JSON.stringify([...oldMsg, action.payload]))
        } else {
            localStorage.setItem([action.payload.receiver], JSON.stringify([action.payload]))
        }
        return action.payload
    }
    return state
}