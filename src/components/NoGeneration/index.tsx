import React from 'react';

import { Container, ImageLoading, TextLoading } from './styles';

export const NoGeneration: React.FC = () => {
  return (
    <Container>
        <ImageLoading source={require('../../assets/img/Group29.png')} />
        <TextLoading>Nenhum geração selecionada</TextLoading>
    </Container>
  )
}
