import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authentication from './authentication'
import ChatApp from './chatapp'
import { BASE_URL } from './domain'
import { contactList, currentChat, newChatUser } from './redux/action'
import { Container } from './w3chat.style'

const W3Chat = () => {
    const Dispatch = useDispatch()
    const { socketController } = useSelector(state => state)
    const socket = socketController

    const newChatHandal = (data, msgContent) => {
        axios.post(`${BASE_URL}/newchat`, {
            sender: data.receiver.user,
            receiver: data.sender.user,
        }).then((responce) => {
            axios.get(`${BASE_URL}/userChat?sender=${data.receiver.user}`).then((result) => {
                const { data } = result.data
                Dispatch(contactList(data))
                Dispatch(newChatUser(msgContent))
            }).catch((error) => {
                console.log(error)
            })
        })
    }
//how to fix it?

    socket.on('connect', () => {
        socket.emit('refresh', localStorage.getItem('user'))
        
        socket.on('reciveMsg', data => {
            const msgContent = { massage: data.massage, time: data.time, receiver: data.sender.user, isMe: false, }
            const chatHistory = JSON.parse(localStorage.getItem([data.sender.user]))
            if (chatHistory === null) {
                newChatHandal(data, msgContent)
            } else {
                Dispatch(newChatUser(msgContent))
            }
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
