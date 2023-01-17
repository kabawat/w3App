export const chatData = (payload) => {
    return {
        type: 'CHATING',
        payload,
    }
}

export const storyMode = (payload) => {
    return {
        type: 'STORY_MODE',
        payload,
    }
}

export const userJoin = (payload) => {
    return {
        type: 'JOIN_USER',
        payload,
    }
}
