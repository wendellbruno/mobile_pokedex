import { styled } from "styled-components/native";

export const Container = styled.View`
    width: ${({theme}) => theme.px(100)}%;
    height: ${({theme}) => theme.px(100)}%;

`;

export const ContainerHeader = styled.View`
    top: ${({theme}) => theme.px(50)}px;
    width: ${({theme}) => theme.px(100)}%;
    height: ${({theme}) => theme.px(76)}px;
    padding: ${({theme}) => theme.px(18)}px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    
    `;

export const ContainerDescription = styled.View`
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
    align-items: center;


`;   

export const Name = styled.Text`
    font-size: ${({theme}) => theme.px(21)}px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.escala_de_cinza_branco};
    text-transform: uppercase;

`;

export const Order = styled.Text`
    font-size: ${({theme}) => theme.px(15)}px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.escala_de_cinza_branco};

`;

export const ButtonReturn = styled.Pressable`
    
`;

export const ContainerImage = styled.View`
    position: absolute;
    width: ${({theme}) => theme.px(100)}%;
    height: ${({theme}) => theme.px(100)}px;
    margin-top: ${({theme}) => theme.px(200)}px;;
    align-items: center;
    justify-content: center;
    z-index: 99;
`;

export const ImagePokemon = styled.ImageBackground`
    width: ${({theme}) => theme.px(280)}px;
    height: ${({theme}) => theme.px(280)}px;
`;

export const ContainerDetails = styled.View`
    position: absolute;
    width: ${({theme}) => theme.px(95)}%;
    height: ${({theme}) => theme.px(55)}%;
    margin-right: ${({theme}) => theme.px(10)}px;
    margin-left: ${({theme}) => theme.px(10)}px;
    border-radius: ${({theme}) => theme.px(10)}px;
    background-color: ${({theme}) => theme.colors.escala_de_cinza_branco};
    bottom: 50px;
    align-items: center;
    justify-content: center;
`;

export const CardDetails = styled.View`
    position: relative;
    bottom: 0;
    margin-top: ${({theme}) => theme.px(3)}%;
    width: ${({theme}) => theme.px(80)}%;
    height: ${({theme}) => theme.px(80)}%;
    align-items: center;
    gap: ${({theme}) => theme.px(16)}px;
`;

export const ContainerAttibutes = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: ${({theme}) => theme.px(10)}px;


`;

export const Attibutes = styled.View`
    flex-direction: row;
    align-items: center;
    text-align: center;

`;

export const BaseStatus = styled.Text`
    font-size: ${({theme}) => theme.px(20)}px;
    font-weight: 700;

`;

export const ContainerBaseStatus = styled.View`
    width: 100%;
    height: ${({theme}) => theme.px(200)}px;
    margin-top: ${({theme}) => theme.px(20)}px;
    gap: ${({theme}) => theme.px(8)}px;
    justify-content: space-around;
`;

export const Status = styled.View`
    flex-direction: row;
    gap: ${({theme}) => theme.px(8)}px;

`;

export const BarStatus = styled.View`
    height: ${({theme}) => theme.px(18)}px;
    min-width: ${({theme}) => theme.px(20)}px;
    align-items: center;
    justify-content: center;
`;