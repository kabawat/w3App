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
    padding: 0px 10px;
    justify-content: space-between;
`
export const ChatTitle = styled.div.attrs(({ }) => ({}))`

`
export const UserAction = styled.div.attrs(({ }) => ({}))`
    display: flex;
    align-items: center;
`
export const NewChatContainer = styled.div.attrs(({ className, id }) => ({ className, id }))`
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
export const SearchContainer = styled.div.attrs(({ className, id }) => ({ className, id }))`
    width:300px;
    background: #f9f9f9;
    border: 1px solid #f9f9f9;
    border-radius: 8px;
    backdrop-filter: blur(3px);
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    position: absolute;
    left: 0px;
    top: 120%;
    display: ${({ isAdd }) => isAdd ? 'block' : 'none'};
    padding: 20px 10px;
`
export const SubTitle = styled.div.attrs(({ className, id }) => ({ className, id }))`
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 10px;
`
export const AddUser = styled.input.attrs(({ onChange, name, className, id }) => ({ onChange, name, className, id }))`
    width: 100%;
    height: 32px;
    border: none;
    border-bottom: 2px solid #E3F2FD;
    padding: 0px 5px;
    border-radius: 4px;
    background: #fff;
`

export const AddUserHeading = styled.div`
    font-size: 14px;
    padding: 5px 0px;
`
export const ContactList = styled.div`
    width: 100%;
    max-height: 200px;
    overflow: auto;
    &::-webkit-scrollbar{
        width: 16px;
    }
    &:hover::-webkit-scrollbar-thumb{
        border: 6px solid #fff;
        background: rgba(0,0,0,0.2);
        border-radius: 10px;
    }
`
export const ContactItem = styled.div.attrs(({ className, key, id }) => ({ className, key, id }))`
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    border-radius: 4px;
    margin: 10px 0px;
    cursor: pointer;
    &:hover{
        background: rgba(0,0,0,0.04);
    }
`

export const NewUserDp = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;

    img{
        border-radius: 50%;
    }
`
export const NewUserName = styled.div`
    font-size: 14px;
    padding-left: 10px;
    line-height:16px;
    font-weight: 600;
    `
export const TagLine = styled.div`
font-weight: 500;
    font-size: 12px;
    padding-left: 10px;
    line-height:16px ;
`