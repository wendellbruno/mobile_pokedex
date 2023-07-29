import { styled } from "styled-components/native";

export const ContainerTouchable = styled.TouchableOpacity`
    width: ${({theme}) => theme.px(25)}px;
    height: ${({theme}) => theme.px(25)}px;
    position: absolute;
`;