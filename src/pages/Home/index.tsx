import React from "react";
import {
  InputSearch,
  SelectedGeracao,
  ListPokemon,
  NoGeneration,
  SelectedPokemon,
} from "../../components";

import { useGlobalContext } from "../../Context";
import { Container } from "./styles";

export const Home: React.FC = () => {
  const { pokemonList, geracao, modal, pokeSelected, showModal } =
    useGlobalContext();

  return (
    <>
      {modal === true ? (
        <SelectedPokemon pokemon={pokeSelected} />
      ) : (
        <Container>
          <InputSearch />
          <SelectedGeracao />
          {geracao === 0 ? (
            <NoGeneration />
          ) : (
            <ListPokemon pokemon={pokemonList} />
          )}
        </Container>
      )}
    </>
  );
};
