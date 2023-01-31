import React, { useState } from 'react'
import { FooterContaienr, FileContainer, ChatTypeContaienr, ChatActionCotainer, SelectButton, SelectFileBox, Chat, Send, FileList, FileIcon, Title } from '../style'
import { BsPlusLg, BsFileEarmarkPdf } from 'react-icons/bs';
import { IoSendSharp, IoVideocamOutline } from 'react-icons/io5';
import { IoIosMusicalNotes } from 'react-icons/io';
import { BiImages } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { chatData } from '../../../redux/action';
import { useEffect } from 'react';
const FooterBody = () => {
    const { myProfile, receiverProfile, socketController } = useSelector(state => state)
    const socket = socketController
    const Dispatch = useDispatch()
    const [showFile, setShowFile] = useState(false)
    const [typeMsg, setTypeMsg] = useState('')
    const typingHandal = (event) => {
        setTypeMsg(event.target.value)
    }
    const sendHandal = (event) => {
        event.preventDefault()
        setTypeMsg('')
        if (typeMsg) {
            Dispatch(chatData({
                massage: typeMsg,
                time: new Date(),
                isMe: true
            }))
            socket.emit('massage', {
                massage: typeMsg,
                time: new Date(),
                sender: myProfile.profile,
                receiver: receiverProfile
            })
        }
    }
    useEffect(() => {
        socket.on('reciveMsg', data => {
            console.log(data);
            const msgContent = { massage: data.massage, time: data.time }
            Dispatch(chatData(msgContent))
        })
    })
    return (
        <FooterContaienr onSubmit={sendHandal}>
            {/* left  */}
            <FileContainer>
                <SelectButton type='button' x={showFile ? 45 : 0} onClick={() => setShowFile(!showFile)}>
                    <BsPlusLg />
                </SelectButton>
                <SelectFileBox show={showFile ? 'visible' : 'hidden'}>
                    <FileList show={showFile}>
                        <input type="file" id='pdf' name='pdf' />
                        <FileIcon htmlFor='pdf'>
                            <BsFileEarmarkPdf />
                            <Title>PDF</Title>
                        </FileIcon>
                    </FileList>
                    <FileList show={showFile}>
                        <input type="file" id='picture' name="picture" />
                        <FileIcon htmlFor='picture'>
                            <BiImages />
                            <Title>Image</Title>
                        </FileIcon>
                    </FileList>
                    <FileList show={showFile}>
                        <input type="file" id='video' name="video" />
                        <FileIcon htmlFor='video'>
                            <IoVideocamOutline />
                            <Title>Video</Title>
                        </FileIcon>
                    </FileList>
                    <FileList show={showFile}>
                        <input type="file" id='music' name="music" />
                        <FileIcon htmlFor='music'>
                            <IoIosMusicalNotes />
                            <Title>Music</Title>
                        </FileIcon>
                    </FileList>
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