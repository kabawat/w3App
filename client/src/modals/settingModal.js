import React from 'react'
import { useCookies } from 'react-cookie'
import { SettingModalContainer, SettingContainer } from './modale.style'

const SettingModal = ({ mouse }) => {
  const [, , removeCookie] = useCookies(['auth'])
  const logout = () => {
    removeCookie('auth')
  }
  return (
    <SettingModalContainer id='modal'>
      <SettingContainer mouse={mouse}>
        <button onClick={logout}>logout</button>
      </SettingContainer>
    </SettingModalContainer>
  )
}

export default SettingModal