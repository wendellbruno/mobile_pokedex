import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    width: 100%;
    height: ${({theme}) => theme.px(88)}px;
    justify-content: center;
    align-items: center;
    background-color: white;

`;

export const BarraPesquisa = styled.TextInput`
    width: ${({theme}) => theme.px(328)}px;
    height: ${({theme}) => theme.px(48)}px;
    border: 1.5px solid ${({theme}) => theme.colors.escala_de_cinza200};
    border-radius: ${({theme}) => theme.px(30)}px;
    padding: ${({theme}) => theme.px(14)}px ${({theme}) => theme.px(16)}px;
    gap: ${({theme}) => theme.px(8)}px;

`