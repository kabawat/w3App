import React from 'react'
import { ChatModeHeader, ChatTitle, UserAction, NewChatContainer, SearchContainer, NewUserName, NewChat, SubTitle, AddUser, AddUserHeading, ContactList, ContactItem, NewUserDp, TagLine } from './style'
import { Image } from '../../../style'
import { BiEdit } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs';
import { useState } from 'react';
import dp from '../../../assets/user_dp/dp1.jpg'
import { useEffect } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux'
import { userJoin } from '../../../redux/action';
const ChatMode = () => {
    const socket = useSelector(state => state.socketController)
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

    const userHandal = (payload) => {
        socket.emit('JoinUser', payload)
    }
    return (
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
                                userList.map((curUser) => {
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
                                })
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
    )
}

export default ChatMode