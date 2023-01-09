import styled from 'styled-components'
export const HeaderSection = styled.div.attrs(({ className, id, key }) => ({ className, id, key }))`
    width: 100%;
    height: 100%;
    /* background: #345; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
`
export const UserInfo = styled.div.attrs(({ className, id, key }) => ({ className, id, key }))`
    height: 100%;
    display: flex;
    align-items: center;
    /* background: red; */
`
export const UserDp = styled.div.attrs(({ className, id, key }) => ({ className, id, key }))`
    width: 45px;
    height: 45px;
    background: pink;
    border-radius: 50%;
    overflow: hidden;
`
export const UserDetails = styled.div.attrs(({ className, id, key }) => ({ className, id, key }))`
    /* background: pink; */
    margin-left: 10px;
`
export const UserName = styled.div.attrs(({ className, id, key }) => ({ className, id, key }))`
    font-size: 16px;
    font-weight: bold;
    margin: 1px 0px;
`
export const UserStatus = styled.div.attrs(({ className, id, key }) => ({ className, id, key }))`
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
`
export const SettingSection = styled.div.attrs(({ className, id, key }) => ({ className, id, key }))`
    position: relative;
    z-index: 20;
    `
export const SettingToggle = styled.button.attrs(({ onClick, type, }) => ({ onClick, type, }))`
    width: 35px;
    height: 35px;
    padding: 4px;
    color: rgb(73 74 76);
    border-radius: 50%;
    transition: all 0.2s linear;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    font-size: 6px;
    &:active{
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }
`
export const ListContaienr = styled.div.attrs(({ className, id, key }) => ({ className, id, key }))`
    z-index: 10;
    position: absolute;
    right: 0px;
    width: 260px;
    height: 400px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background: #fff;
    border-radius: 8px;
    top: ${({ top }) => top};
    transition:  ${({ delay }) => `${delay}s`} all  ease-in-out;
    visibility: ${({ show }) => show};
`

// footer 
export const FooterContaienr = styled.form.attrs(({ className, onSubmit, id, key }) => ({ className, id, key, onSubmit }))`
    position: relative;
    width: 100%;
    height: 100%;
    padding-left: 80px;
    padding-right: 70px;
`
export const FileContainer = styled.div.attrs(({ className, id, key }) => ({ className, id, key }))`
    position: absolute;
    left: 0px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all  cubic-bezier(0, 0.01, 0, 1.04);
    width: 80px;
`
export const SelectButton = styled.button.attrs(({ onClick }) => ({ onClick }))`
    width: 45px;
    height: 45px;
    border-radius:50%;
    background:rgb(25 118 210);
    display: grid;
    place-items: center;
    color: #fff;

    &:active{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    svg{
        transform: ${({ x }) => `rotate(${x}deg)`};
        transition: all  cubic-bezier(0.4, 0, 1, 1) 100ms;
    }
    `
export const SelectFileBox = styled.div.attrs(({ className, id, key }) => ({ className, id, key }))`
    width: 200px;
    height: 400px;
    backdrop-filter: blue(3px);
    background: rgba(0,0,0,0.02);
    position: absolute;
    bottom: 100%;
    left: 0px;
    transition: all  cubic-bezier(0.01, 0.16, 0.85, 1.02);
    visibility: ${({ show }) => show};
    `
export const ChatTypeContaienr = styled.div.attrs(({ className, id, key }) => ({ className, id, key }))`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    align-items: center;
    `

export const Chat = styled.input.attrs(({ type, name, onChange, value, id, className, placeholder }) => ({ type, name, onChange, value, id, className, placeholder }))`
    width: 100%;
    height: 70%;
    border-radius: 10px;
    border: none;
    outline: none;
    padding: 0px 10px;
    background: #fafafa;
    box-shadow: inset rgba(149, 157, 165, 0.1) 0px 8px 24px;
    display: flex;
    `
export const ChatActionCotainer = styled.div.attrs(({ className, id, key }) => ({ className, id, key }))`
    width: 70px;
    position: absolute;
    right: 0px;
    top: 0px;
    height: 100%;
    display: grid;
    place-items: center;
    
    `
export const Send = styled.button.attrs(({ onClick, clasName, id }) => ({ onClick, clasName, id }))`
    display: grid;
    place-items: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius:50%;
    background:rgb(25 118 210);
    color: #fff;

    &:active{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    svg{
        transition: all  cubic-bezier(0.4, 0, 1, 1) 100ms;
    }
`

// chat Area massage 
export const MassageContaienr = styled.div.attrs(({ className, id, key }) => ({ className, id, key }))`
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar{
        width:20px;
    }
    &::-webkit-scrollbar-thumb{
        background: #d0d0d0;
        border: 6px solid #fafafa;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-button{
        background: #d0d0d0;
        border: 5px solid #fafafa;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        cursor: pointer;
    }
`
export const ChatBox = styled.div.attrs(({ className, id, key }) => ({ className, id, key }))`
    width: 100%;
    height: auto;
    padding: 10px 0px;
    display: flex;
    align-items: flex-end;
    flex-direction: ${({ isMe }) => isMe ? 'row-reverse' : 'row'};
    `
export const Massage = styled.div.attrs(({ className, id, key }) => ({ className, id, key }))`
    max-width: 60%;
    border-radius: 20px;
    padding: 10px 20px;
    background: #fff;
    ${({ isMe }) => isMe ? 'border-bottom-right-radius' : 'border-bottom-left-radius'} : 2px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    `
export const ChatDp = styled.div.attrs(({ className, id, key }) => ({ className, id, key }))`
    margin: 0px 10px;
    width: 40px;
    height: 40px;
    background: red;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    background: #fff;
`
export const Msg = styled.div.attrs(({ className, id, key }) => ({ className, id, key }))`
    font-size: 15px;
`
export const Time = styled.div.attrs(({ className, id, key }) => ({ className, id, key }))`
    font-size: 12px;
    text-align: right;
    color: #999;
`