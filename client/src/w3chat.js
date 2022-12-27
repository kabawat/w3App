import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Authentication from './authentication'
import ChatApp from './chatapp'
import { Container } from './w3chat.style'

const W3Chat = () => {
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:2917/verify', {
            headers: {
                'Content-Type': 'application/json',
                'withCredentials': true
            },
            withCredentials: true,
            credentials: 'same-origin',
        }).then((result) => {
            setIsAuth(result.data.status)
        })
    })
    console.log(isAuth);
    return (
        <Container>
            {
                isAuth ? <ChatApp /> : <Authentication />
            }
        </Container>
    )
}

export default W3Chat
