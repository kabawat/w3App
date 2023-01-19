import React from 'react'
import { ChatModeHeader, ChatTitle, UserAction, NewChatContainer, SearchContainer, NewUserName, NewChat, SubTitle, AddUser, AddUserHeading, ContactList, ContactItem, NewUserDp, TagLine, ChatMainContainer, ChatContainer } from './style'
import { Image } from '../../../style'
import { BiEdit } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs';
import { useState } from 'react';
import dp from '../../../assets/user_dp/dp1.jpg'
import { useEffect } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux'
const ChatMode = () => {
    const [isAdd, setIsAdd] = useState(false)
    const [userList, setUserList] = useState([])
    useEffect(() => {
        const getdata = async () => {
            const result = await axios.get('http://localhost:2917/all_User', {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:2917/',
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
                credentials: 'same-origin',
            })
            setUserList(result.data);
        }
        getdata()
    }, [])

    const userHandal = async (payload) => {
        const id = `2917-room-id.${new Date().getTime()}`
        const result = await axios.get(`http://localhost:2917/profile`, {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:2917/',
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            credentials: 'same-origin',
        })

        const newChat = await axios.post(`http://localhost:2917/newchat`, {
            _room: id,
            sender: result.data.email,
            receiver: payload.email
        })
    }
    return (
        <ChatMainContainer>
            {/* chat header  */}
            <ChatModeHeader>
                <ChatTitle> Chat</ChatTitle>
                <UserAction>
                    {/* new user add  */}
                    <NewChatContainer>
                        <NewChat onClick={() => setIsAdd(!isAdd)}>
                            <BiEdit />
                        </NewChat>
                        <SearchContainer isAdd={isAdd}>
                            <SubTitle>New Chat</SubTitle>
                            <AddUser />
                            <AddUserHeading>
                                All Contact
                            </AddUserHeading>
                            <ContactList>
                                {
                                    userList ? userList.map((curUser) => {
                                        return <ContactItem key={curUser._id} onClick={() => userHandal(curUser)}>
                                            <NewUserDp>
                                                <Image src={dp} />
                                            </NewUserDp>
                                            <div>
                                                <NewUserName>
                                                    {curUser.user}
                                                </NewUserName>
                                                <TagLine>
                                                    {curUser.email}
                                                </TagLine>
                                            </div>
                                        </ContactItem>
                                    }) : ''
                                }
                            </ContactList>
                        </SearchContainer>
                    </NewChatContainer>
                    {/* new user action  */}
                    <NewChatContainer>
                        <NewChat>
                            <BsThreeDots />
                        </NewChat>
                    </NewChatContainer>
                </UserAction>
            </ChatModeHeader>

            {/* user chat List  */}
            <ChatContainer>

            </ChatContainer>
        </ChatMainContainer>
    )
}

export default ChatMode