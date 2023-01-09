import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ChatAside from './components/aside/chatAside'
import ChatArea from './components/chatArea'
import FooterBody from './components/footer'
import HeaderBody from './components/header'
import { Aside, ChatContainer, Container, Header, Main, Footer, ChatAreaContainer } from './style'

const ChatApp = () => {
    const Navigate = useNavigate()
    useEffect(() => {
        const getVarify = async () => {
            try {
                await axios.get('http://localhost:2917/verify', {
                    headers: {
                        'Access-Control-Allow-Origin': 'http://localhost:2917/',
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                    credentials: 'same-origin',
                })
            } catch (error) {
                Navigate('/user-authentication')
            }
        }
        getVarify()
    }, [])

    return (
        <Container>
            <Aside>
                <ChatAside />
            </Aside>
            <Main>
                <ChatContainer>
                    <Header>
                        <HeaderBody />
                    </Header>
                    <ChatAreaContainer>
                        <ChatArea />
                    </ChatAreaContainer>
                    <Footer>
                        <FooterBody />
                    </Footer>
                </ChatContainer>
            </Main>
        </Container>
    )
}

export default ChatApp