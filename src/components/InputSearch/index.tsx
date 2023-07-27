import React from 'react';
import { Container, BarraPesquisa } from './styles';

export const InputSearch: React.FC = () => {
  return (
    <Container>
      <BarraPesquisa placeholder='Procurar' />
    </Container>
  )
}
