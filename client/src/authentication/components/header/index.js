import React, { useState } from 'react'
import { Image } from '../../../style'
import { HeaderSection, UserDetails, UserDp, UserInfo, UserName, UserStatus, SettingSection, SettingToggle, ListContaienr } from '../style'
import user from '../../../assets/user_dp/dp1.jpg'
import {BiDotsVerticalRounded} from 'react-icons/bi'
const HeaderBody = () => {
    const [showList, setShowList] = useState(false)
    return (
        <HeaderSection >
            <UserInfo>
                <UserDp>
                    <Image src={user} />
                </UserDp>
                <UserDetails>
                    <UserName>
                        Mukesh Singh
                    </UserName>
                    <UserStatus>
                        online
                    </UserStatus>
                </UserDetails>
            </UserInfo>
            <UserInfo>
                <SettingSection>
                    {/* icon  */}
                    <SettingToggle onClick={() => setShowList(!showList)}>
                        <BiDotsVerticalRounded/>
                    </SettingToggle>
                    {/* open list  */}
                    <ListContaienr
                        show={showList ? 'visible' : 'hidden'}
                        top={showList ? '135%' : '100%'}
                        delay={showList ? 0.2 : 0}
                    >
                    </ListContaienr>
                </SettingSection>
            </UserInfo>
        </HeaderSection>
    )
}

export default HeaderBody