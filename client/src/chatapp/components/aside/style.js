import styled from "styled-components";
export const AsideCotainer = styled.div.attrs(({ className, id }) => ({ className, id }))`
    width: 100%;
    height: 100%;
    background: #fff;
    position: relative;
`
export const SettingAsideContainer = styled.div.attrs(({ className, id }) => ({ className, id }))`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 50px;
    height: 100%;
    background: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background:  #E3F2FD;
    z-index: 10;
    `
export const ChatContaienr = styled.div.attrs(({ className, id }) => ({ className, id }))`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 5;
    padding-left: 50px;
`
export const StoryBody = styled.div.attrs(({ className, id }) => ({ className, id }))`
    height: 100%;
    width: 100%;
    `
export const ContactBody = styled(StoryBody)`
    
`

// aside 
export const AsideTab = styled.div.attrs(({ className, id }) => ({ className, id }))`
    width: 100%;
    padding-right: 4px;
    padding-top: 30px;
`
export const AsideTabBtn = styled.button.attrs(({ className, id, onClick }) => ({ className, id, onClick }))`
    width: 40px;
    height: 40px;
    backdrop-filter: blur(3px);
    background: rgba(255,255,255,0.6);
    border: 1px solid rgba(0,0,0,0.05);
    border-top-right-radius:8px;
    border-bottom-right-radius:8px;
    margin: 2px 0px;
    position: relative;
    padding-left: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ isActive }) => isActive ? '#1976d2' : '#888'};
    svg{
        width: 20px;
    }
    &::before{
        content: '';
        position: absolute;
        top: 50%;
        left: 4px;
        transform: translateY(-50%);
        background: ${({ isActive }) => isActive ? '#1976d2' : '#E3F2FD'};
        height: 55%;
        width: 4px;
        border-radius: 4px;
    }
`

// chat mode 
export const ChatModeHeader = styled.div.attrs(({ className, id }) => ({ className, id }))`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #000;
    display: flex;
    align-items: center;
`