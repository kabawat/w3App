import axios from 'axios'
import dp from '../assets/user_dp/dp1.jpg'
import React, { useState } from 'react'
import { Image } from '../style.js'
import { SubTitle, AddUser, SearchContainer, NewUserName, AddUserHeading, ContactList, ContactItem, NewUserDp, TagLine, NewUserModale, } from './modale.style.js'
const NewChatModal = ({ state }) => {
    const { userList, mouse } = state
    const [profile, setProfile] = useState({})
    window.addEventListener('click', (event) => {
        console.log(event.target.id);
    })

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
        const newChat = await axios.post(`http://localhost:2917/newchat`, {
            _room: id,
            sender: result.data.email,
            receiver: payload.email,
        })
        setProfile(newChat)
    }
    return (
        <NewUserModale id="newChatModal">
            <SearchContainer left={mouse.x} top={mouse.y}>
                <SubTitle>New Chat</SubTitle>
                <AddUser id='isAdd' />
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
        </NewUserModale>
    )
}

export default NewChatModal