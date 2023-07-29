import React from 'react';
import { ContainerTouchable } from './styles';
import CatchOff from '../../assets/svgs/pokeball.svg';
import CatchOn from '../../assets/svgs/pokeballCapturado.svg';
import { Pokemon } from '../../model';

type Proprs = {
  catch: Pokemon['catch']
}
export const CatchButton: React.FC<Proprs> = (proprs) => {
   return (
    <ContainerTouchable>
        {
          proprs.catch === true ? (<CatchOn />) : (<CatchOff />)
        }
    </ContainerTouchable>
  )
}
