import { styled } from "styled-components/native";

export const Container = styled.View`
    height: ${({theme}) => theme.px(156)}px;
    width: ${({theme}) => theme.px(328)}px;
    border-radius: ${({theme}) => theme.px(15)}px;
    background-color: ${({theme}) => theme.colors.escala_de_cinza50};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Infos = styled.View`
    padding-left: ${({theme}) => theme.px(15)}px;
    height: ${({theme}) => theme.px(105)}px;
    width: ${({theme}) => theme.px(208)}px;

`;


export const Name = styled.Text`
    font-size: ${({theme}) => theme.px(21)}px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.escala_de_cinza_preto};
    text-transform: uppercase;

`;

export const Order = styled.Text`
    font-size: ${({theme}) => theme.px(12)}px;
    font-weight: 600;
    color: black;

`;

export const ContainerImg = styled.View`
    height: 100%;
    width: ${({theme}) => theme.px(100)}px;
    justify-content: center;
    align-items: center;
    border-radius: ${({theme}) => theme.px(15)}px;
`

export const CatchView = styled.View`
    align-items: center;
    margin-top: ${({theme}) => theme.px(10)}px;
`;
