import styled from "styled-components";
export const AsideCotainer = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
    position: relative;
`
export const SettingAsideContainer = styled.div`
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
export const ChatContaienr = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 5;
    padding-left: 50px;
`
export const StoryBody = styled.div`
    height: 100%;
    width: 100%;
    `
export const ContactBody = styled(StoryBody)`
    
`

// aside 
export const AsideTab = styled.div`
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
export const ChatMainContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`
export const ChatModeHeader = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #000;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    justify-content: space-between;
    position: absolute;
    top: 0px;
    background: #fff;
    z-index: 23;
`
export const ChatTitle = styled.div.attrs(({ }) => ({}))`

`
export const UserAction = styled.div.attrs(({ }) => ({}))`
    display: flex;
    align-items: center;
`
export const NewChatContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 30px;
    height: 30px;
    border-radius: 4px; 
    margin-left: 5px;
    position: relative;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    }
`
export const NewChat = styled.button.attrs(({ className, id, onClick }) => ({ className, id, onClick }))`
    width: 100%;
    height: 100%;
    display: grid;
    font-size: 18px;
    place-items:center;
`

// user chat list 
export const ChatMainCotainer = styled.div`
    height: 100vh;
    width: 100%;
    padding-top: 60px;    
`
export const ChatContainer = styled.div`
    padding: 0px 10px;
    padding-right: 0px;
    height: 100%;
    width: 100%;
    top: 0px;
    overflow: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar{
        width: 16px;
    }
    &:hover::-webkit-scrollbar-thumb{
        border: 6px solid #fff;
        background: rgba(0,0,0,0.2);
        border-radius: 10px;
    }
`
export const UserCartContainer = styled.div`
    height: 55px;
    width: 100%;
    padding: 0px 10px;
    border-radius: 5px;
    margin: 5px 0px;
    border-bottom: ${({ active }) => active ? '1px solid rgb(0 0 0 / 5%)' : '1px solid rgb(0 0 0 / 0%)'} ;
    position: relative;
    background: ${({ active }) => active ? 'rgb(227 242 253 / 48%)' : 'transparent'};;
    &:hover{
        border-bottom: 1px solid rgb(0 0 0 / 5%);
        background: rgb(227 242 253 / 48%);
    }
`
export const UserChatDp = styled.button.attrs(({ type, onClick, id, className }) => ({ type, onClick, id, className }))`
    position: absolute;
    width: 40px;
    height: 40px;
    overflow: hidden;
    top:50%;
    left: 10px;
    transform: translateY(-50%);
    border-radius: 50%;
`
export const ChatLinkContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px 6px 0px 50px;
    display: flex;
    align-items: center;
`
export const UserInfo = styled.button.attrs(({ type, onClick, id, className, onMouseOver }) => ({ type, onClick, id, className, onMouseOver }))`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer;
    position:relative;
`
export const Label = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background: transparent;
    z-index: 30;
`
export const UserName = styled.div`
    font-size: 14px;
    /* font-weight: 600; */
    
`
export const ChatPreview = styled.div`
    font-size: 10px;
`
// ContaxtMenu
export const ContaxtMenu = styled.div`
    padding: 5px 5px;
    background: #fff;
    border: 1px solid #dddddd9e;
    top: ${({ top }) => `${top}px`};
    left: ${({ left }) => `${left}px`};
    display: ${({ active }) => active ? "block" : 'none'};
    position: fixed;
    border-radius: 6px;
    width: 160px;
    z-index:40;
`
