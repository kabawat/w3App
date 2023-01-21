import React, { useState } from 'react'
import { Image } from '../../../style'
import { HeaderSection, UserDetails, UserDp, UserInfo, UserName, UserStatus, SettingSection, SettingToggle, ListContaienr } from '../style'
import userdp from '../../../assets/user_dp/dp1.jpg'
import { HiDotsVertical } from 'react-icons/hi';
import { useSelector } from 'react-redux';
const HeaderBody = () => {
    const [showList, setShowList] = useState(false)
    const mystate = useSelector(state => state.receiverProfile)
    const { user, email } = mystate
    return (
        <HeaderSection>
            <UserInfo>
                <UserDp>
                    <Image src={userdp} />
                </UserDp>
                <UserDetails>
                    <UserName>
                        {user}
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
                        <HiDotsVertical />
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