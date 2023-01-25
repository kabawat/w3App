import React from 'react'
import { ChatModeHeader, ChatTitle, UserAction, NewChatContainer, NewChat, ChatMainContainer, ChatContainer, ChatMainCotainer, UserCartContainer, ChatLinkContainer, UserChatDp, UserName, UserInfo, ChatPreview, ContaxtMenu, Label } from './style'
import { BiEdit } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs';
import { Button, ContextAction, Image } from '../../../style'
import { useState } from 'react';
import dp from '../../../assets/user_dp/dp1.jpg'
import { useEffect } from 'react';
import axios from 'axios'
import { RiDeleteBinLine } from 'react-icons/ri'
import { AiOutlineClear } from 'react-icons/ai'
import { BsPin } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { contactList, RUserProfile } from '../../../redux/action';
import NewChatModal from '../../../modals/NewUserModale';
import { BASE_URL } from '../../../domain';
const ChatMode = () => {
    const { myProfile, receiverProfile, chatContactList } = useSelector(state => state)
    const { email } = receiverProfile
    const { profile } = myProfile
    const Dispatch = useDispatch()
    const [curRoom, setCurRoom] = useState()
    const [context, setContext] = useState(false)
    const [userList, setUserList] = useState([])
    const [isNewChatModal, setIsNewChatModal] = useState(false)
    const [deleteChat, setDeleteChat] = useState()
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0
    })
    window.addEventListener('click', (event) => {
        setContext(false)
        if (event.target.id === 'newChatModal') {
            setIsNewChatModal(false)
        }
    })
    useEffect(() => {
        const getdata = async () => {
            const result = await axios.get(`${BASE_URL}/all_User`, {
                headers: {
                    'Access-Control-Allow-Origin': `${BASE_URL}`,
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
                credentials: 'same-origin',
            })
            setUserList(result.data);
        }
        getdata()
    }, [])

    const hadalSearchModale = (event) => {
        setIsNewChatModal(true)
        setMouse({
            x: event.pageX,
            y: 50
        })
    }
    // user chat list 
    useEffect(() => {
        const getData = async () => {
            const result = await axios.get(`${BASE_URL}/userChat?sender=${profile.email}`)
            const { data } = await result.data
            Dispatch(contactList(data))
        }
        if (profile) getData()
    }, [profile, deleteChat])

    const getFriendProfile = async (payload) => {
        const responce = await axios.get(`${BASE_URL}/receiver_profile?receiver=${payload}`)
        Dispatch(RUserProfile(await responce.data.data))
        setIsNewChatModal(false)
    }

    const handalContextMenu = (event) => {
        setCurRoom(event.target.id)
        event.preventDefault()
        setContext(!context)
        setTimeout(() => {
            setContext(true)
        }, 200)
        setMouse({
            x: event.pageX,
            y: event.pageY
        })
    }

    const handalDeleteChat = async (payload) => {
        const responce = await axios.delete(`${BASE_URL}/delete-chat?_room=${payload}`)
        setDeleteChat(responce)
    }

    return (
        <ChatMainContainer>
            {/* chat header  */}
            <ChatModeHeader>
                <ChatTitle> Chat</ChatTitle>
                <UserAction>
                    {/* new user add  */}
                    <NewChatContainer>
                        <NewChat onClick={hadalSearchModale}>
                            <BiEdit />
                            <Label id='new_user'></Label>
                        </NewChat>
                        {
                            isNewChatModal ? <NewChatModal state={{ userList, mouse }} /> : null
                        }

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
                    <ContaxtMenu active={context} top={mouse.y} left={mouse.x}>
                        <ContextAction>
                            <Button><BsPin /> <span>Pin to top</span></Button>
                        </ContextAction>
                        <ContextAction>
                            <Button onClick={() => handalDeleteChat(curRoom)}><RiDeleteBinLine /> <span>Delete</span></Button>
                        </ContextAction>
                        <ContextAction>
                            <Button><AiOutlineClear /> <span>Clear massage</span></Button>
                        </ContextAction>
                    </ContaxtMenu>
                    {
                        chatContactList.map((curChat, index) => {
                            return (
                                <UserCartContainer
                                    active={((curChat.receiver === email) ? true : false)}
                                    onContextMenu={handalContextMenu}
                                    id={curChat._room}
                                    key={index}
                                >
                                    <UserChatDp>
                                        <Image src={dp} />
                                    </UserChatDp>
                                    <ChatLinkContainer>
                                        <UserInfo onClick={() => getFriendProfile(curChat.receiver)}>
                                            <UserName>{curChat.receiver}</UserName>
                                            <ChatPreview>
                                                last seen 10:12 PM
                                            </ChatPreview>
                                            <Label id={curChat._room}></Label>
                                        </UserInfo>
                                    </ChatLinkContainer>
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