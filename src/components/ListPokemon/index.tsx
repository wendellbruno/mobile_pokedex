import React from 'react';
import { View, FlatList, Text } from 'react-native';
import {useGlobalContext} from '../../Context'
import { Pokemon } from '../../model';
import {CardPokemon} from './components/CardPokemon';

//const {pokemonList} = useGlobalContext();

import { Container, Separator } from './styles';

type Proprs = {
  pokemon: React.ReactNode
}
export function ListPokemon({pokemon}: any){
  return(
    <Container>
        <FlatList
         data={pokemon}
         renderItem={ ({item})=> <CardPokemon pokemon={item}/> }
         ItemSeparatorComponent={Separator}
         /> 
     </Container>
  )
}
