import { styled } from "styled-components/native";

export const Container = styled.View`
    height: ${({theme}) => theme.px(75)}%;
    margin-top: ${({theme}) => theme.px(20)}px;
    align-items: center;
`;

export const Separator = styled.View`
    height: ${({theme}) => theme.px(5)}px;

`;

