import axios from 'axios'
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
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
    const [cookies, setCookies, removeCookie] = useCookies(['auth'])
    const { receiverProfile } = useSelector(state => state)
    const Navigate = useNavigate()
    const Dispatch = useDispatch()

    useEffect(() => {
        const getVarify = async () => {
            try {
                await axios.get(`${BASE_URL}/verify`, {
                    headers: {
                        authorization: cookies.auth
                    }
                }).then((result) => {
                    setCookies('auth', result.data.token)

                })

                await axios.get(`${BASE_URL}/profile`, {
                    headers: {
                        authorization: cookies.auth
                    }
                }).then(result => {
                    Dispatch(userProfile(result.data))
                })
            } catch (error) {
                removeCookie('auth')
                Navigate('/user-authentication')
            }
        }
        getVarify()
    }, [Dispatch, removeCookie, Navigate, cookies.auth, setCookies])
    // useEffect(() => {

    // }, [, Dispatch])
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