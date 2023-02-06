import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authentication from './authentication'
import ChatApp from './chatapp'
import { chatData } from './redux/action'
import { Container } from './w3chat.style'

const W3Chat = () => {
    const { socketController } = useSelector(state => state)
    const socket = socketController
    const Dispatch = useDispatch()
    socket.on('connect', () => {
        socket.on('reciveMsg', data => {
            const msgContent = { massage: data.massage, time: data.time, receiver: data.sender.user, isMe: false, }
            Dispatch(chatData(msgContent))
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
