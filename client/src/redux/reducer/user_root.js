const userAuthCheck = (state = false, action) => {
    if (action.type === 'USER_AUTH') {
        state = true
    }
    return state
}
export default userAuthCheck