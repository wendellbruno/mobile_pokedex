import { styled } from "styled-components/native";

export const Container = styled.View`
    margin-top:${({theme}) => theme.px(4)}px;
    gap: ${({theme}) => theme.px(4)}px;
    width: 100%;
    height: ${({theme}) => theme.px(40)}px;
    border: 1px solid blue;
    display: flex;
    flex-direction: row;
`;

export const ContainerType = styled.View`
    width: ${({theme}) => theme.px(53)}%;
    height: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: ${({theme}) => theme.px(5)}px;
    border: 1px solid red;
    border-radius: ${({theme}) => theme.px(48)}px;
    gap: 4px;

`;

export const TypeName = styled.Text`
    font-size: ${({theme}) => theme.px(12)}px;
    font-weight: 500;
    text-transform: uppercase;
`;

export const BgType = styled.View`
    width: ${({theme}) => theme.px(32)}px;
    height: ${({theme}) => theme.px(32)}px;
    background-color: ${({theme}) => theme.colors.escala_de_cinza_branco};
    border-radius: 50%;
`;

export const BgImgType = styled.Image`
    width: 15px;
    height: 15px;
`;