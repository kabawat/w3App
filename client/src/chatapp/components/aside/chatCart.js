import React, { useState } from 'react'
import { UserCartContainer, UserChatDp, ChatLinkContainer, UserInfo, UserName, ChatPreview, ContaxtMenu } from './style'
import { RiDeleteBinLine } from 'react-icons/ri'
import { AiOutlineClear } from 'react-icons/ai'
import { BsPin } from 'react-icons/bs'
import { Button, Image, ContextAction } from '../../../style'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { RUserProfile } from '../../../redux/action'
import dp from '../../../assets/user_dp/dp1.jpg'
const ChatCart = ({ curChat }) => {
    const Dispatch = useDispatch()
    const { email } = useSelector(state => state.receiverProfile)

    const getFriendProfile = async (payload) => {
        const responce = await axios.get(`http://localhost:2917/receiver_profile?receiver=${payload}`)
        Dispatch(RUserProfile(await responce.data.data))
    }

    const handalContextMenu = (event) => {
        event.preventDefault()
        setContext(!context)
        setMouse({
            x: event.pageX,
            y: event.pageY
        })
    }

    const handalDeleteChat = async (payload) => {
        const responce = await axios.delete(`http://localhost:2917/delete-chat?_room=${payload}`)
        console.log(responce);
        curChat.setDeleteChat(responce)
    }

    const [context, setContext] = useState(false)
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0
    })

    window.addEventListener('click', () => {
        setContext(false)
    })

    return (
        <UserCartContainer
            active={((curChat.receiver === email) ? true : false)}
            onContextMenu={handalContextMenu}
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
                </UserInfo>
            </ChatLinkContainer>
            <ContaxtMenu active={context} top={mouse.y} left={mouse.x}>
                <ContextAction>
                    <Button><BsPin /> <span>Pin to top</span></Button>
                </ContextAction>
                <ContextAction>
                    <Button onClick={() => handalDeleteChat(curChat._room)}><RiDeleteBinLine /> <span>Delete</span></Button>
                </ContextAction>
                <ContextAction>
                    <Button><AiOutlineClear /> <span>Clear massage</span></Button>
                </ContextAction>
            </ContaxtMenu>
        </UserCartContainer>
    )
}

export default ChatCart