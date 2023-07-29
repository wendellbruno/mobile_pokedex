import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { ContainerTouchable } from './styles';

import CatchOff from '../../assets/svgs/pokeball.svg';
import CatchOn from '../../assets/svgs/pokeballCapturado.svg';


export const CatchButton: React.FC = () => {
  return (
    <ContainerTouchable>
        <CatchOff />
    </ContainerTouchable>
  )
}
