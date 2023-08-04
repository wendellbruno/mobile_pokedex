import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Modal} from "react-native";

import {
  Container,
  ButtonReturn,
  ContainerHeader,
  ContainerTyper,
} from "./styles";
import { Pokemon } from "../../model";
import { useGlobalContext } from "../../Context";
import { ChipType } from "../ChipType";
import { getColorType } from "../../utils/Typecolors";

type Proprs = {
  pokemon: Pokemon;
};

export const SelectedPokemon: React.FC<Proprs> = ({
  pokemon,
}: Proprs) => {
  const { modal, showModal } = useGlobalContext();

  console.log(pokemon)
  return (
    <Modal
      visible={modal}
      animationType="slide"
      onRequestClose={() => showModal(pokemon)}
    >
      <Container>
        <ContainerHeader>
          <ButtonReturn onPress={() => showModal(pokemon)}>
            <Ionicons name="arrow-back-circle" size={40} />
          </ButtonReturn>
          <ContainerTyper />
        </ContainerHeader>
      </Container>
      
    </Modal>
  );
};
