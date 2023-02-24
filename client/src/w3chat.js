import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authentication from './authentication'
import ChatApp from './chatapp'
import { currentChat, newChatUser } from './redux/action'
import { Container } from './w3chat.style'

const W3Chat = () => {
    const Dispatch = useDispatch()
    const { socketController } = useSelector(state => state)
    const socket = socketController
    socket.on('connect', () => {
        socket.on('reciveMsg', data => {
            const msgContent = { massage: data.massage, time: data.time, receiver: data.sender.user, isMe: false, }
            Dispatch(newChatUser(msgContent))
            const chatHistory = JSON.parse(localStorage.getItem([data.sender.user]))

            Dispatch(currentChat(localStorage.getItem('curChatWith')))
        })
    })
    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ChatApp />} />
                    <Route path='*' element={<ChatApp />} />
                    <Route path='/user-authentication' element={<Authentication />} />
                </Routes>
            </BrowserRouter>
        </Container>
    )
}

export default W3Chat
