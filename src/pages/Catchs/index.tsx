import React from "react";
import { useGlobalContext } from "../../Context";
import { ListPokemon, InputSearch, SelectedPokemon } from "../../components";

import { Container } from "./styles";

export const Catchs: React.FC = () => {
  const { pokeListCatch, geracao, modal, pokeSelected, showModal } =
    useGlobalContext();
  return (
    <>
      {modal === true ? (
        <SelectedPokemon pokemon={pokeSelected} />
      ) : (
        <Container>
          <InputSearch />
          <ListPokemon pokemon={pokeListCatch} />
        </Container>
      )}
    </>
  );
};
