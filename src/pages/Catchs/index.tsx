import React from 'react';
import {useGlobalContext} from '../../Context';
import {ListPokemon, InputSearch} from '../../components';

import { Container } from './styles';


export const Catchs: React.FC = () => {
  const {pokeListCatch} = useGlobalContext();
  return (
    <Container>
      <InputSearch />
      <ListPokemon pokemon={pokeListCatch}  />
    </Container>
  )
}
