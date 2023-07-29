import React from 'react';

import { 
  Container, 
  Infos, 
  Order, 
  Name, 
  ContainerImg,
  CatchView
 } from './styles';
import { Pokemon } from '../../../../model';
import {getColorType} from '../../../../utils/Typecolors';
import {ImagePoke, ChipType, CatchButton} from  '../../../../components';

type Poke = {
  pokemon: Pokemon
}

export const CardPokemon: React.FC<Poke> = ({pokemon}: Poke) => {
  
  return (
    <Container>
      <Infos>
        <Order > {`Nº ${pokemon.id}`} </Order>
        <Name>{pokemon.name}</Name>
        <ChipType types={pokemon.types} />
        <CatchView>
        <CatchButton />
        </CatchView>
      </Infos>
      <ContainerImg style={{backgroundColor: getColorType(pokemon.types[0].type.name)}}>
        <ImagePoke image={{uri: pokemon.image}} type={pokemon.types[0].type.name} />
      </ContainerImg>
    </Container>
  );
}