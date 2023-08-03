import React, { useState } from "react";
import { FlatList, TouchableOpacity, Modal } from "react-native";
import { CardPokemon } from "./components/CardPokemon";
import { SelectedPokemon } from "../index";

import { Container, Separator } from "./styles";
import { Pokemon } from "../../model";

type Proprs = {
  pokemon: React.ReactNode;
};

type Poke = {
  pokemon: Pokemon;
}
export function ListPokemon({ pokemon }: any) {
  const [modal, setShowModal] = useState<boolean>(false);



  function showModal({pokemon}: Poke){
    setShowModal(!showModal)
    console.log(modal, pokemon)
    if (showModal) {
      console.log('modal true')
      return (
        <Modal
          visible={modal}
          animationType="slide"
          onRequestClose={() => setShowModal(!showModal)}
        >
          <SelectedPokemon
            pokemon={pokemon}
            showModal={() => setShowModal(!showModal)}
          />
        </Modal>
      );
    }
  }

  

  return (
    <Container>
      <FlatList
        data={pokemon}
        keyExtractor={(pokemon) => pokemon.id}
        renderItem={({ item }) => (
          //onPress={() => setShowModal(true)}
          <TouchableOpacity onPress={() => showModal(item)}>
            <CardPokemon pokemon={item} />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={Separator}
      />
      {/* <Modal
            visible={showModal}
            animationType='slide'
            onRequestClose={() => setShowModal(!showModal)}
            >
              <SelectedPokemon pokemon={item} showModal={ () => setShowModal(!showModal)}/>
            </Modal> */}
    </Container>
  );
}
