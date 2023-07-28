import React from 'react';

import { Container, ContainerType, TypeName, BgType, BgImgType } from './styles';
import { Pokemon } from '../../model';
import TypeSvg from '../../assets/svgs/bug.svg';
import { getColorType } from '../../utils/Typecolors';
import {svgs} from '../../assets/svgs'


type Poke = {
    types: Pokemon['types'];
}
export const ChipType: React.FC<Poke> = ({types}: Poke) => {
    const colorbG = getColorType(types[0].type.name);

  return (
    <Container>
        {types.map((element, index) => {
            return (
                <ContainerType key={index} style={{backgroundColor: getColorType(element.type.name)}}>
                    <BgType>
                    {svgs[element.type.name]}
                    </BgType>
                    <TypeName>{element.type.name}</TypeName>
                </ContainerType>
            )
        })}
    </Container>
  );
}
