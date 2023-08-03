import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {SafeAreaView, StatusBar} from 'react-native'

import { Container, ButtonReturn, ContainerHeader, ContainerTyper } from './styles';
import { Pokemon } from '../../model';
import { ChipType } from '../ChipType';
import { getColorType } from '../../utils/Typecolors';


type Proprs = {
    pokemon: Pokemon;
    showModal:() => void
}

export const SelectedPokemon: React.FC<Proprs> = ({pokemon, showModal}: Proprs) => {

  //style={{backgroundColor: getColorType(pokemon.types[0].type.name)}} 
   //console.log(pokemon)

  return (
      <Container>
       {/*  <ContainerHeader>
        <ButtonReturn onPress={showModal}><Ionicons name='arrow-back-circle' size={40} /></ButtonReturn>
        <ContainerTyper />
        </ContainerHeader> */}
        
     </Container>
  )
}
