import React from "react";
import video from '../../../../assets/ram.mp4'
import { Image } from "../../../../style";
import { ChatBox, ChatDp, Video, VideoMsg, MassageOuter, Msg, MsgContant, VideoDesc, HiddenInput, VideoTime } from "../../style";
import dp from '../../../../assets/user_dp/dp1.jpg'
const VideoPlayer = () => {
    return (
        <ChatBox isMe={true} >
            <ChatDp>
                <Image src={dp} />
            </ChatDp>
            <MassageOuter isMe={true}>
                <VideoMsg isMe={true} >
                    <Msg>
                        <Video>
                            <video controls>
                                <source src={video} type="video/mp4" />
                            </video>
                        </Video >
                        <MsgContant>
                            <VideoDesc>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus tempore explicabo laudantium omnis odio, dolores fuga vel. A voluptatem nostrum nulla, asperiores quae provident aperiam suscipit sequi. Cupiditate, ea mollitia.
                            </VideoDesc>
                            <VideoTime>
                                12:10
                            </VideoTime>
                            <HiddenInput id={0} />
                        </MsgContant>
                    </Msg>
                </VideoMsg>
            </MassageOuter>
        </ChatBox>
    );
};

export default VideoPlayer;
