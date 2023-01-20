import React from 'react'
import { ChatModeHeader, ChatTitle, UserAction, NewChatContainer, SearchContainer, NewUserName, NewChat, SubTitle, AddUser, AddUserHeading, ContactList, ContactItem, NewUserDp, TagLine, ChatMainContainer, ChatContainer, ChatMainCotainer, UserCartContainer, UserChatDp, ChatLinkContainer, ActionButton, UserInfo, UserName, ChatPreview } from './style'
import { Image } from '../../../style'
import { BiEdit } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs';
import { HiDotsVertical } from 'react-icons/hi'
import { useState } from 'react';
import dp from '../../../assets/user_dp/dp1.jpg'
import { useEffect } from 'react';
import axios from 'axios'
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

    const [profile, setProfile] = useState({})
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
        setProfile(result.data.data)
        const newChat = await axios.post(`http://localhost:2917/newchat`, {
            _room: id,
            sender: result.data.email,
            senderUser: result.data.user,
            receiver: payload.email,
            receiverUser: payload.user
        })
    }

    // user chat list 
    const [chatUserList, setChatUserList] = useState([])
    useEffect(() => {
        const getData = async () => {
            const profile = await axios.get(`http://localhost:2917/profile`, {
                headers: {
                    'Access-Control-Allow-Origin': 'http://localhost:2917/',
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
                credentials: 'same-origin',
            })
            const result = await axios.get(`http://localhost:2917/userChat?email=${profile.data.email}`)
            const { data } = await result.data
            const filterList = await data.filter((curList) => {
                if (profile.data.email === curList.sender) {
                    return curList
                }
            })


            const newList = await filterList.map((curChat) => {
                const { receiver, _room } = curChat;
                return {
                    receiver,
                    _room,
                }
            })
            setChatUserList(newList);
        }
        getData()
    }, [profile])
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
            <ChatMainCotainer>
                {/* cart list  */}
                <ChatContainer>
                    {
                        chatUserList.map((curChat, index) => {
                            return (
                                <UserCartContainer key={index}>
                                    <UserChatDp>
                                        <Image src={dp} />
                                    </UserChatDp>
                                    <ChatLinkContainer>
                                        <UserInfo>
                                            <UserName>{curChat.receiver}</UserName>
                                            <ChatPreview>
                                                last seen 10:12 PM
                                            </ChatPreview>
                                        </UserInfo>
                                    </ChatLinkContainer>
                                    <ActionButton>
                                        <HiDotsVertical />
                                    </ActionButton>
                                </UserCartContainer>
                            )
                        })
                    }

                </ChatContainer>
            </ChatMainCotainer>
        </ChatMainContainer>
    )
}

export default ChatMode