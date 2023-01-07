import styled from 'styled-components'
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #fafafa;
    position: relative;
`
export const Aside = styled.div`
    position: absolute;
    left: 0px;
    top:0px;
    width: 350px;
    height: 100%;
    background: #fff;
    z-index: 15;
`
export const Main = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0px;
    left: 0px;
    padding-left: 350px;
    z-index: 10;
    `

export const ChatContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    padding: 60px 0px;
`
export const Header = styled.div`
    top: 0px;
    left: 0px;
    position: absolute;
    width: 100%;
    height: 60px;
    z-index: 20;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    `
export const Footer = styled.div`
    position: absolute;
    width: 100%;
    height: 60px;
    bottom: 0px;
    right: 0px;
`
