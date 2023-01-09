import React, { useState } from 'react'
import { FooterContaienr, FileContainer, ChatTypeContaienr, ChatActionCotainer, SelectButton, SelectFileBox, Chat, Send } from '../style'
import AddIcon from '@mui/icons-material/Add';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useDispatch } from 'react-redux';
import { chatData } from '../../../redux/action';
const FooterBody = () => {
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
        }
    }
    return (
        <FooterContaienr onSubmit={sendHandal}>
            {/* left  */}
            <FileContainer>
                <SelectButton type='button' x={showFile ? 45 : 0} onClick={() => setShowFile(!showFile)}>
                    <AddIcon />
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
                    <TelegramIcon />
                </Send>
            </ChatActionCotainer>
        </FooterContaienr>
    )
}

export default FooterBody