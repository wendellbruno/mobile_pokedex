import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Modal, View, Text} from "react-native";

import {
  Container,
  ButtonReturn,
  ContainerHeader,
  ContainerDescription,
  ContainerImage,
  ContainerDetails,
  CardDetails,
  ContainerAttibutes,
  ContainerBaseStatus,
  Attibutes,
  Status,
  BaseStatus,
  BarStatus,
  Name,
  Order,
  ImagePokemon
} from "./styles";
import { Pokemon } from "../../model";
import { useGlobalContext } from "../../Context";
import { getColorType } from "../../utils/Typecolors";
import { svgs } from "../../assets/svgsPadrao";
import { theme } from "../../global";
import { ChipType } from "../ChipType";

type Proprs = {
  pokemon: Pokemon;
};

export const SelectedPokemon: React.FC<Proprs> = ({
  pokemon,
}: Proprs) => {
  const { modal, showModal } = useGlobalContext();
  return (
    <Modal
      visible={modal}
      animationType="slide"
      onRequestClose={() => showModal(pokemon)}
    >
      <Container style={{backgroundColor: getColorType(pokemon.types[0].type.name)}}>
        <ContainerHeader>
          <ButtonReturn onPress={() => showModal(pokemon)}>
            <Ionicons name="arrow-back-circle" size={40} color={theme.colors.escala_de_cinza_branco} />
          </ButtonReturn>
          <ContainerDescription>
            <Name>{pokemon.name}</Name>
            <Order>Nº {pokemon.id}</Order>
          </ContainerDescription>
        </ContainerHeader>
        <ContainerImage>
          <ImagePokemon source={{uri: pokemon.image}} />
        </ContainerImage>
        <ContainerDetails>
          <CardDetails>
            <ChipType types={pokemon.types} />
          <ContainerAttibutes>
            <Attibutes>
            {svgs['weight']}
            <Text>{pokemon.weight} KG</Text>
            </Attibutes>
            <Attibutes>
            {svgs['height']}
            <Text>{pokemon.height} M</Text>
            </Attibutes>
          </ContainerAttibutes>
          <BaseStatus style={{color: getColorType(pokemon.types[0].type.name)}}>Base Stats</BaseStatus>
          <ContainerBaseStatus>
          {pokemon.stats.map((elemento) => (
            <Status>
            <Text key={elemento.stat.name} style={{textTransform: "uppercase"}}>{elemento.stat.name}</Text>
            <BarStatus style={{
              backgroundColor: getColorType(pokemon.types[0].type.name),
              width: theme.px(elemento.base_stat)
              }}>
                <Text style={{color: theme.colors.escala_de_cinza_branco}}>{elemento.base_stat}</Text>
              </BarStatus>
            </Status>
            
          ))}
          </ContainerBaseStatus>
          </CardDetails>
        </ContainerDetails>
      </Container>
      
    </Modal>
  );
};
