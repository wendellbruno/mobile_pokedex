import React, {useEffect} from 'react';
import { View,Text } from 'react-native';
import {useGlobalContext} from '../../Context';
import {ListPokemon} from '../../components';

import { Container } from './styles';


export const Catchs: React.FC = () => {
  const {pokeListCatch} = useGlobalContext();
  useEffect(() =>{},[])
  return (
    <Container>
      <ListPokemon pokemon={pokeListCatch}  />
    </Container>
  )
}
