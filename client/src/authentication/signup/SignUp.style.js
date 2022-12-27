import styled from "styled-components";
export const Container = styled.div`
    background: #fff;
    `
export const FormContainer = styled.div`
    background: #fff;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Input = styled.input.attrs(({ type, className, name, value, onChange, onBlur, onFocus }) => ({
    className,
    name,
    value,
    onChange,
    onBlur,
    onFocus,
    type,
}))`
    font-family: sans-serif, Arial;
    outline: none;
    &:hover{
        outline: none;
    }
    &:active{
        outline: none;
    }
`