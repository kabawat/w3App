import React, { useState } from 'react'
import { FooterContaienr, FileContainer, ChatTypeContaienr, Lebal, ChatActionCotainer, SelectButton, SelectFileBox, Chat, Send, FileList, FileIcon, Title } from '../style'
import { BsPlusLg, BsFileEarmarkPdf } from 'react-icons/bs';
import { IoSendSharp, IoVideocamOutline } from 'react-icons/io5';
import { IoIosMusicalNotes } from 'react-icons/io';
import { BiImages } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { chatData } from '../../../redux/action';
const FooterBody = () => {
    const { myProfile, receiverProfile, socketController } = useSelector(state => state)
    const socket = socketController
    const Dispatch = useDispatch()
    const [showFile, setShowFile] = useState(false)
    const [typeMsg, setTypeMsg] = useState('')
    const typingHandal = (event) => {
        setTypeMsg(event.target.value)
    }
    window.addEventListener('click', (event) => {
        if (event.target.id !== 'toggleFile') {
            setShowFile(false)
        }
    })
    const sendHandal = (event) => {
        event.preventDefault()
        setTypeMsg('')
        if (typeMsg) {
            Dispatch(chatData({
                massage: typeMsg,
                time: new Date(),
                isMe: true,
                receiver: receiverProfile.user
            }))

            socket.emit('massage', {
                massage: typeMsg,
                time: new Date(),
                sender: myProfile.profile,
                receiver: receiverProfile
            })
        }
    }
    return (
        <FooterContaienr onSubmit={sendHandal}>
            {/* left  */}
            <FileContainer>
                <SelectButton x={showFile ? 45 : 0}>
                    <BsPlusLg />
                    <button id='toggleFile' type='button' onClick={() => setShowFile(!showFile)}></button>
                </SelectButton>
                <SelectFileBox show={showFile ? 'visible' : 'hidden'}>
                    <FileList show={showFile}>
                        <input type="file" id='pdf' name='pdf' />
                        <FileIcon >
                            <Title htmlFor='pdf'>PDF</Title>
                            <BsFileEarmarkPdf />
                            <Lebal htmlFor='pdf'></Lebal>
                        </FileIcon>
                    </FileList>
                    <FileList show={showFile}>
                        <input type="file" id='picture' name="picture" />
                        <FileIcon >
                            <Title htmlFor='picture'>Image</Title>
                            <BiImages />
                            <Lebal htmlFor='picture'></Lebal>
                        </FileIcon>
                    </FileList>
                    <FileList show={showFile}>
                        <input type="file" id='video' name="video" />
                        <FileIcon >
                            <Title htmlFor='video'>video</Title>
                            <IoVideocamOutline />
                            <Lebal htmlFor='video'></Lebal>
                        </FileIcon>
                    </FileList>
                    <FileList show={showFile}>
                        <input type="file" id='music' name="music" />
                        <FileIcon >
                            <Title htmlFor='music'>Music</Title>
                            <IoIosMusicalNotes />
                            <Lebal htmlFor='music'></Lebal>
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