import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {CardPokemon} from './components/CardPokemon';

import { Container, Separator } from './styles';

type Proprs = {
  pokemon: React.ReactNode
}
export function ListPokemon({pokemon}: any){
  return(
    <Container>
        <FlatList
         data={pokemon}
         keyExtractor={pokemon => pokemon.id}
         renderItem={ ({item})=> (
          <TouchableOpacity onPress={() => console.log(item)}>
            <CardPokemon pokemon={item}/>
          </TouchableOpacity>
         ) }
         ItemSeparatorComponent={Separator}
         /> 
     </Container>
  )
}
