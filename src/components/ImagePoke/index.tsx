import React from 'react';

import {ImageProps} from 'react-native'
import { ImgContainer, Container, TypePokeImg } from './styles';
import {svgs} from '../../assets/svgsPadrao';
import { Pokemon } from '../../model';

type Proprs = {
    image: ImageProps['source']
    type: Pokemon['types']
}

export const ImagePoke: React.FC<Proprs> = ({image, type}: Proprs) => {
  return (
    <Container>
      <TypePokeImg>
      {svgs[type]}
      </TypePokeImg>
      <ImgContainer source={image} />
    </Container>

  )
}
