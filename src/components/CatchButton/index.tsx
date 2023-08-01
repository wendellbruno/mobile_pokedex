import React from 'react';
import { ContainerTouchable } from './styles';
import CatchOff from '../../assets/svgs/pokeball.svg';
import CatchOn from '../../assets/svgs/pokeballCapturado.svg';
import { Pokemon } from '../../model';
import {useGlobalContext} from '../../Context'

interface Proprs  {
  pokemon: Pokemon
}
export const CatchButton: React.FC<Proprs> = ({pokemon}: Proprs) => {

  const {cathProkemon} = useGlobalContext();


   return (
    <ContainerTouchable onPress={() => cathProkemon(pokemon)}>
      
        {
          pokemon.catch === true ? (<CatchOn />) : (<CatchOff />)
        }
      
       
    </ContainerTouchable>
  )
}
