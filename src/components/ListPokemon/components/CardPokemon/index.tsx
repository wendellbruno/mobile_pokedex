import React from 'react';

import { 
  Container, 
  Infos, 
  ImagePoke, 
  Order, 
  Name, 
  ContainerImg
 } from './styles';
import { Pokemon } from '../../../../model';
import {getColorType} from '../../../../utils/Typecolors';
import {ChipType} from '../../../ChipType';

type Poke = {
  pokemon: Pokemon
}

export const CardPokemon: React.FC<Poke> = ({pokemon}: Poke) => {
  
  const colorbG = getColorType(pokemon.types[0].type.name);
  return (
    <Container>
      <Infos>
        <Order > {`Nº ${pokemon.id}`} </Order>
        <Name>{pokemon.name}</Name>
        <ChipType types={pokemon.types} />
      </Infos>
      <ContainerImg style={{backgroundColor: `${colorbG}`}}>
        <ImagePoke  source={{uri: pokemon.image}}/>
      </ContainerImg>
    </Container>
  );
}
