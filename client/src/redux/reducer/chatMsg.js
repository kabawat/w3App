const data = JSON.parse(localStorage.getItem('chat'))
const initialValue = data ? data : []
const chatMassage = (state = initialValue, action) => {
    if (action.type == 'CHATING') {
        localStorage.setItem('chat', JSON.stringify([...state, action.payload]))
        return [
            ...state,
            action.payload
        ]

    }
    return state
}
export default chatMassage
