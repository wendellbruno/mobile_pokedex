import React from 'react';
import {InputSearch, SelectedGeracao, ListPokemon} from '../../components'
import {useGlobalContext} from '../../Context';

import { Container } from './styles';

export const Home: React.FC = () => {

  const {pokemonList} = useGlobalContext();

  return (
    <Container>
        <InputSearch />
        <SelectedGeracao />
        <ListPokemon pokemon={pokemonList}   />
    </Container>
  )
  
}
