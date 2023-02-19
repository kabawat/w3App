import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authentication from './authentication'
import ChatApp from './chatapp'
import { BASE_URL } from './domain'
import { chatData, newUserCHat, newUserJoined } from './redux/action'
import { Container } from './w3chat.style'

const W3Chat = () => {
    const { socketController, receiverProfile } = useSelector(state => state)
    const socket = socketController
    const Dispatch = useDispatch()
    const NewUser = async (data) => {
        const sender = data.receiver.user
        const receiver = data.sender.user
        try {
            const responce = await axios.post(`${BASE_URL}/newchat`, {
                sender,
                receiver
            });
            if (responce) {
                const { data } = responce.data
                Dispatch(newUserJoined(data))
            } else {

            }
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
    socket.on('connect', () => {
        socket.on('reciveMsg', data => {
            const msgContent = { massage: data.massage, time: data.time, receiver: data.sender.user, isMe: false, video: data.video }
            Dispatch(newUserCHat(msgContent))
            NewUser(data)
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
