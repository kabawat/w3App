import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../domain'
import { userProfile } from '../redux/action'
import ChatAside from './components/aside/chatAside'
import ChatArea from './components/chatArea'
import NoChat from './components/chatArea/noChat'
import FooterBody from './components/footer'
import HeaderBody from './components/header'
import { Aside, ChatContainer, Container, Header, Main, Footer, ChatAreaContainer } from './style'

const ChatApp = () => {
    const { receiverProfile } = useSelector(state => state)
    const Navigate = useNavigate()
    const Dispatch = useDispatch()
    useEffect(() => {
        const getVarify = async () => {
            try {
                await axios.get(`${BASE_URL}/verify`, {
                    headers: {
                        'Access-Control-Allow-Origin': `${BASE_URL}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                    credentials: 'same-origin',
                })

                const responce = await axios.get(`${BASE_URL}/profile`, {
                    headers: {
                        'Access-Control-Allow-Origin': `${BASE_URL}`,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                    credentials: 'same-origin',
                })
                const result = responce.data
                Dispatch(userProfile(result))
            } catch (error) {
                Navigate('/user-authentication')
            }
        }
        getVarify()
    }, [Dispatch, Navigate])
    return (
        <Container>
            <Aside>
                <ChatAside />
            </Aside>
            <Main>
                {
                    receiverProfile ? (
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
                    ) : <NoChat />
                }
            </Main>

        </Container>
    )
}

export default ChatApp