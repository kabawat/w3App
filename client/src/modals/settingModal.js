import React from 'react'
import { SettingModalContainer, SettingContainer } from './modale.style'

const SettingModal = ({ mouse }) => {
  return (
    <SettingModalContainer id='modal'>
      <SettingContainer mouse={mouse}>
        setting
      </SettingContainer>
    </SettingModalContainer>
  )
}

export default SettingModal