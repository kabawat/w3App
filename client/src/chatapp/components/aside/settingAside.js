import React from 'react'
import { SettingAsideContainer, AsideTab, AsideTabBtn } from './style'
import { BsChatLeftText } from 'react-icons/bs'
import { HiStatusOnline } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { storyMode } from '../../../redux/action'
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
            <div>2</div>
        </SettingAsideContainer>

    )
}

export default SettingAside
