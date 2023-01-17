import React from 'react'
import { Image } from '../../../style'
import { ChatBox, Massage, MassageContaienr, ChatDp, Msg, Time } from '../style'
import dp from '../../../assets/user_dp/dp1.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { io } from "socket.io-client";
import { chatData } from '../../../redux/action'
const ChatArea = () => {
    const Dispatch = useDispatch()
    const { chatMassage } = useSelector(state => state)
    const socket = io();
    socket.on('receive', massage => {
        console.log(massage);
        Dispatch(chatData(massage))
    })
    return (
        <MassageContaienr>
            {
                chatMassage?.map((curItem, index) => {
                    const date = new Date(curItem.time).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                    return <ChatBox key={index} isMe={curItem.isMe}>
                        <ChatDp>
                            <Image src={dp} />
                        </ChatDp>
                        <Massage isMe={curItem?.isMe}>
                            <Msg>
                                {curItem?.massage}
                            </Msg>
                            <Time>
                                {date}
                            </Time>
                        </Massage>
                    </ChatBox>
                })
            }
        </MassageContaienr>
    )
}

export default ChatArea
