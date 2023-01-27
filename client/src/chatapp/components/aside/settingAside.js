import React from 'react'
import { SettingAsideContainer, AsideTab, AsideTabBtn, UserSetting, UserActionBox, SettingButton, DpSection } from './style'
import { BsChatLeftText } from 'react-icons/bs'
import { HiStatusOnline } from 'react-icons/hi';
import { IoSettingsOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { storyMode } from '../../../redux/action'
import { Image } from '../../../style';
import userProfiileDp from '../../../assets/user_dp/dp1.jpg'
const SettingAside = () => {
    const Dispatch = useDispatch()
    // storyMode
    const [isActive, SetIsActive] = useState(true)
    const chatHandal = (event) => {
        Dispatch(storyMode(event))
        SetIsActive(event)
    }
    return (
        <SettingAsideContainer>
            <AsideTab>
                <AsideTabBtn isActive={isActive} onClick={() => chatHandal(true)}>
                    <BsChatLeftText />
                </AsideTabBtn>
                <AsideTabBtn isActive={!isActive} onClick={() => chatHandal(false)}>
                    <HiStatusOnline />
                </AsideTabBtn>
            </AsideTab>
            <UserSetting>
                <UserActionBox>
                    <SettingButton isActive={false}>
                        <IoSettingsOutline />
                    </SettingButton>
                </UserActionBox>
                <DpSection>
                    <UserActionBox>
                        <Image src={userProfiileDp} />
                    </UserActionBox>
                </DpSection>
            </UserSetting>
        </SettingAsideContainer>

    )
}

export default SettingAside
