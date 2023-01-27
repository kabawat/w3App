import React from 'react'
import { SettingModalContainer, SettingContainer } from './modale.style'

const ProfileModal = ({ mouse }) => {
    return (
        <SettingModalContainer id='modal'>
            <SettingContainer mouse={mouse}>
                profile
            </SettingContainer>
        </SettingModalContainer>
    )
}

export default ProfileModal