import React from 'react';
import { ContainerTouchable } from './styles';
import CatchOff from '../../assets/svgs/pokeball.svg';
import CatchOn from '../../assets/svgs/pokeballCapturado.svg';
import { Pokemon } from '../../model';
import {useGlobalContext} from '../../Context'

type Proprs = {
  catch: Pokemon
}
export const CatchButton: React.FC<Pokemon> = (pokemon : Pokemon) => {

  const {cathProkemon} = useGlobalContext();


   return (
    <ContainerTouchable onPress={() => cathProkemon(pokemon)}>
      
        {
          pokemon.catch === true ? (<CatchOn />) : (<CatchOff />)
        }
      
       
    </ContainerTouchable>
  )
}
