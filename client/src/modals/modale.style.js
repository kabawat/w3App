import styled from "styled-components"
import { Button } from "../style"
const Div = styled.div`

`
export const SubTitle = styled(Div)`
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 10px;
`
export const AddUser = styled.input`
    width: 100%;
    height: 32px;
    border: none;
    border-bottom: 2px solid #E3F2FD;
    padding: 0px 5px;
    border-radius: 4px;
    background: #fff;
`
export const NewUserModale = styled(Div)`
    width: 100%;
    height: 100vh;
    background:transparent;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 40;
`
export const SearchContainer = styled(Div)`
    position: absolute;
    width:300px;
    background: #f9f9f9;
    border: 1px solid #f9f9f9;
    border-radius: 8px;
    backdrop-filter: blur(3px);
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    position: absolute;
    left: ${({ left }) => `${left}px`};
    top: ${({ top }) => `${top}px`};
    padding: 20px 10px;
    z-index: 100;
`
export const NewUserName = styled(Div)`
    font-size: 14px;
    padding-left: 10px;
    line-height:16px;
    font-weight: 600;
    text-align: left;
`
export const AddUserHeading = styled(Div)`
    font-size: 14px;
    padding: 5px 0px;
`
export const ContactList = styled(Div)`
    width: 100%;
    max-height: 200px;
    overflow: auto;
    &::-webkit-scrollbar{
        width: 16px;
    }
    &:hover::-webkit-scrollbar-thumb{
        border: 6px solid #f9f9f9;
        background: rgba(0,0,0,0.2);
        border-radius: 10px;
    }
`
export const ContactItem = styled(Button)`
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 10px;
    border-radius: 4px;
    margin: 10px 0px;
    cursor: pointer;
    &:hover{
        background: rgba(0,0,0,0.04);
    }
`

export const NewUserDp = styled(Div)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;

    img{
        border-radius: 50%;
    }
`
export const TagLine = styled(Div)`
    font-weight: 500;
    font-size: 12px;
    padding-left: 10px;
    line-height:16px ;
    text-align: left;
`