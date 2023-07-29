import React from 'react';
import { ContainerTouchable } from './styles';
import CatchOff from '../../assets/svgs/pokeball.svg';
import CatchOn from '../../assets/svgs/pokeballCapturado.svg';
import { Pokemon } from '../../model';
import {useGlobalContext} from '../../Context'

type Proprs = {
  catch: Pokemon['catch']
}
export const CatchButton: React.FC<Proprs> = (proprs) => {

  const {cathProkemon} = useGlobalContext();


   return (
    <ContainerTouchable onPress={() => cathProkemon(proprs.catch)}>
        {
          proprs.catch === true ? (<CatchOn />) : (<CatchOff />)
        }
    </ContainerTouchable>
  )
}
