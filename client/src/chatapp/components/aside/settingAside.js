import React from 'react'
import { SettingAsideContainer, AsideTab, AsideTabBtn } from './style'
import ChatIcon from '@material-ui/icons/Chat';
import DataUsageIcon from '@material-ui/icons/DataUsage';
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
                    <ChatIcon />
                </AsideTabBtn>
                <AsideTabBtn isActive={!isActive} onClick={() => chatHandal(false)}>
                    <DataUsageIcon />
                </AsideTabBtn>
            </AsideTab>
            <div>2</div>
        </SettingAsideContainer>

    )
}

export default SettingAside
