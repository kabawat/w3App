import styled from 'styled-components'
export const Container = styled.div.attrs(({ className, id }) => ({ className, id }))`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #fafafa;
    position: relative;
`
export const Aside = styled.div.attrs(({ className, id }) => ({ className, id }))`
    position: absolute;
    left: 0px;
    top:0px;
    width: 380px;
    height: 100%;
    background: #E3F2FD;
    z-index: 15;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    
`
export const Main = styled.div.attrs(({ className, id }) => ({ className, id }))`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0px;
    left: 0px;
    padding-left: 380px;
    z-index: 10;
    `

export const ChatContainer = styled.div.attrs(({ className, id }) => ({ className, id }))`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    padding: 60px 0px;
`
export const Header = styled.div.attrs(({ className, id }) => ({ className, id }))`
    top: 0px;
    left: 0px;
    position: absolute;
    width: 100%;
    height: 60px;
    z-index: 20;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    background: #fff;
    `
export const Footer = styled.div.attrs(({ className, id }) => ({ className, id }))`
    position: absolute;
    width: 100%;
    height: 60px;
    bottom: 0px;
    right: 0px;
    box-shadow: rgba(33, 35, 38, 0.1) 0px -10px 10px -10px;
    background: #fff;
`
export const ChatAreaContainer = styled.div.attrs(({ className, id }) => ({ className, id }))`
    width: 100%;
    height: 100%;
    overflow: hidden;
`
