import { styled } from "styled-components/native";

export const Container = styled.View`
    margin-top: ${({theme}) => theme.px(50)}px;
    width: ${({theme}) => theme.px(100)}%;
    height: ${({theme}) => theme.px(100)}%;

`;


export const ContainerHeader = styled.View`
    width: ${({theme}) => theme.px(100)}%;
    height: ${({theme}) => theme.px(307)}px;
    border: 1px solid red;
    overflow: hidden;

`;

export const ButtonReturn = styled.Pressable`
    left: 30px;
    position: absolute;
    z-index: 99;
`;

export const ContainerTyper = styled.View`
    width: ${({theme}) => theme.px(498)}px;
    height: ${({theme}) => theme.px(498)}px;
    margin-top: ${({theme}) => theme.px(-227)}px;
    margin-left: ${({theme}) => theme.px(-63)}px;
    margin-right: ${({theme}) => theme.px(-75)}px;;
    border-radius: ${({theme}) => theme.px(498)}px;
`;
