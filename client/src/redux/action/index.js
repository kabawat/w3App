export const chatData = (payload) => {
    return {
        type: 'CHATING',
        payload,
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

export const deleteMsg = (payload) => {
    return {
        type: 'DELETE_MSG',
        payload,
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