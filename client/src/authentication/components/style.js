import styled from 'styled-components'
export const HeaderSection = styled.div`
    width: 100%;
    height: 100%;
    /* background: #345; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
`
export const UserInfo = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    /* background: red; */
`
export const UserDp = styled.div`
    width: 45px;
    height: 45px;
    background: pink;
    border-radius: 50%;
    overflow: hidden;
`
export const UserDetails = styled.div`
    /* background: pink; */
    margin-left: 10px;
`
export const UserName = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin: 1px 0px;
`
export const UserStatus = styled.div`
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
`
export const SettingSection = styled.div`
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
export const ListContaienr = styled.div`
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