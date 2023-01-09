import React from 'react'
import { ChatModeHeader, ChatTitle, UserAction, NewChatContainer, SearchContainer, NewChat, SubTitle, AddUser } from './style'
import { BiEdit } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs';
import { useState } from 'react';
const ChatMode = () => {
    const [isAdd, setIsAdd] = useState(false)
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