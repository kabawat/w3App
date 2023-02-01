export const chatData = (payload) => {
    return {
        type: 'CHATING',
        payload,
    }
}

export const deleteMsg = ({ newMsgList, user }) => {
    return {
        type: 'DELETE_MSG',
        newMsgList,
        user
    }
}

export const getChatMsg = (payload) => {
    return {
        type: 'GET_CHAT',
        payload
    }
}

export const userProfile = (payload) => {
    return {
        type: 'PROFILE',
        payload,
    }
}

export const contactList = (payload) => {
    return {
        type: 'CHAT_CONTACT',
        payload
    }
}


export const storyMode = (payload) => {
    return {
        type: 'STORY_MODE',
        payload,
    }
}
export const RUserProfile = (payload) => {
    return {
        type: "RECEIVER_PROFILE",
        payload
    }
}