import React, { useState } from 'react'
import { FooterContaienr, FileContainer, ChatTypeContaienr, ChatActionCotainer, SelectButton, SelectFileBox, Chat, Send } from '../style'
import { BsPlusLg } from 'react-icons/bs';
import { IoSendSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { chatData } from '../../../redux/action';
import { io } from "socket.io-client";
const FooterBody = () => {
    const Dispatch = useDispatch()
    const [showFile, setShowFile] = useState(false)
    const [typeMsg, setTypeMsg] = useState('')
    const typingHandal = (event) => {
        setTypeMsg(event.target.value)
    }
    const socket = io();
    const sendHandal = (event) => {
        event.preventDefault()
        setTypeMsg('')
        socket.on('connect', () => {
        });
        if (typeMsg) {
            // Dispatch(chatData({
            //     massage: typeMsg,
            //     time: new Date(),
            //     isMe: true
            // }))
            socket.emit('send', {
                massage: typeMsg,
                time: new Date(),
                isMe: false
            })
        }
    }
    // socket 

    return (
        <FooterContaienr onSubmit={sendHandal}>
            {/* left  */}
            <FileContainer>
                <SelectButton type='button' x={showFile ? 45 : 0} onClick={() => setShowFile(!showFile)}>
                    <BsPlusLg />
                </SelectButton>
                <SelectFileBox show={showFile ? 'visible' : 'hidden'}>
                    {/* file  */}
                </SelectFileBox>
            </FileContainer>
            {/* middle  */}
            <ChatTypeContaienr>
                <Chat placeholder="type" value={typeMsg} onChange={typingHandal} />
            </ChatTypeContaienr>
            {/* right  */}
            <ChatActionCotainer>
                <Send type='submit'>
                    <IoSendSharp />
                </Send>
            </ChatActionCotainer>
        </FooterContaienr>
    )
}

export default FooterBody