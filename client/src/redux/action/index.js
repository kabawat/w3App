export const chatData = (payload) => {
    return {
        type: 'CHATING',
        payload,
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