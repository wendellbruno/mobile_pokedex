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

    height: ${({theme}) => theme.px(100)}px;
    width: ${({theme}) => theme.px(176)}px;
    border: 1px solid red;
    margin-left: ${({theme}) => theme.px(16)}px;

`;

export const Order = styled.Text`
    border: 1px solid blue;
    font-size: ${({theme}) => theme.px(12)}px;
    font-weight: 600;
    color: black;

`;

export const Name = styled.Text`
    font-size: ${({theme}) => theme.px(21)}px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.escala_de_cinza_preto};
    text-transform: uppercase;

`;

export const ContainerImg = styled.View`
    border: 1px solid green;
    height: 100%;
    width: ${({theme}) => theme.px(126)}px;
    justify-content: center;
    align-items: center;
    border-radius: ${({theme}) => theme.px(15)}px;
    

`

export const ImagePoke = styled.ImageBackground`
    width: 100px;
    height: 100px;
    object-fit: cover;
`;
