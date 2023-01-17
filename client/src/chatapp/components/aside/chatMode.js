import React from 'react'
import { ChatModeHeader, ChatTitle, UserAction, NewChatContainer, SearchContainer, NewUserName, NewChat, SubTitle, AddUser, AddUserHeading, ContactList, ContactItem, NewUserDp, TagLine } from './style'
import { Image } from '../../../style'
import { BiEdit } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs';
import { useState } from 'react';
import dp from '../../../assets/user_dp/dp1.jpg'
import { useEffect } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { userJoin } from '../../../redux/action';
const ChatMode = () => {
    const dispatch = useDispatch()
    const [isAdd, setIsAdd] = useState(false)
    const [userList, setUserList] = useState([])
    useEffect(() => {
        const getdata = async () => {
            const result = await axios('http://localhost:2917/finduser')
            setUserList(result.data);
        }
        getdata()
    }, [])
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
                                    return <ContactItem key={curUser._id} onClick={() => dispatch(userJoin(curUser))}>
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