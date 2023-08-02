import { styled } from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    width: ${({theme}) => theme.px(100)}%;
    height: ${({theme}) => theme.px(100)}%;
    background-color: ${({theme}) => theme.colors.escala_de_cinza_branco};
`;