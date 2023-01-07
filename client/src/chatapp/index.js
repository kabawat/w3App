import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderBody from '../authentication/components/header'
import { Aside, ChatContainer, Container, Header, Main, Footer } from './style'

const ChatApp = () => {
    const Navigate = useNavigate()
    useEffect(() => {
        const getVarify = async () => {
            try {
                const result = await axios.get('http://localhost:2917/verify', {
                    headers: {
                        'Access-Control-Allow-Origin': 'http://localhost:2917/',
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                    credentials: 'same-origin',
                })
                console.log(result);
            } catch (error) {
                Navigate('/user-authentication')
            }
        }
        getVarify()
    }, [])

    return (
        <Container>
            <Aside>

            </Aside>
            <Main>
                <ChatContainer>
                    <Header>
                        <HeaderBody />
                    </Header>
                    asldkfjlkdfj
                    <Footer>
                        footer
                    </Footer>
                </ChatContainer>
            </Main>
        </Container>
    )
}

export default ChatApp