import { styled } from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    width: ${({theme}) => theme.px(356)}px;
    height: ${({theme}) => theme.px(273)}px;
    margin-top: ${({theme}) => theme.px(50)}px;;
`;

export const ImageLoading = styled.ImageBackground`
    width: ${({theme}) => theme.px(356)}px;
    height: ${({theme}) => theme.px(273)}px;
    object-fit: cover;
`;

export const TextLoading = styled.Text`
    margin-top: ${({theme}) => theme.px(30)}px;;
    font-size: ${({theme}) => theme.px(23)}px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.escala_de_cinza_preto};
`;