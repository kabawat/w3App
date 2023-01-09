import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authentication from './authentication'
import ChatApp from './chatapp'
import { Container } from './w3chat.style'

const W3Chat = () => {
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
