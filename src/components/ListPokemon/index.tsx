import React, { useState } from "react";
import { FlatList, TouchableOpacity} from "react-native";
import { CardPokemon } from "./components/CardPokemon";
import {useGlobalContext} from '../../Context';
import { SelectedPokemon } from "../index";

import { Container, Separator } from "./styles";
import { Pokemon } from "../../model";

type Proprs = {
  pokemon: React.ReactNode;
};

type Poke = {
  pokemon: Pokemon;
}
export function ListPokemon({ pokemon}: any) {

  const {showModal} = useGlobalContext();


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
    </Container>
  );
}
