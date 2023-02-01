import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authentication from './authentication'
import ChatApp from './chatapp'
import { Container } from './w3chat.style'

const W3Chat = () => {
    const { socketController } = useSelector(state => state)
    const socket = socketController
    socket.on('connect', () => {
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
