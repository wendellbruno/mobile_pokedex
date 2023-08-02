import React from 'react';
import {InputSearch, SelectedGeracao, ListPokemon, NoGeneration} from '../../components'
import {useGlobalContext} from '../../Context';
import { Container } from './styles';

export const Home: React.FC = () => {

  const {pokemonList, geracao} = useGlobalContext();

  return (
    <Container>
        <InputSearch />
        <SelectedGeracao />
        {geracao === 0 ? (<NoGeneration />) : <ListPokemon pokemon={pokemonList} /> }
        
    </Container>
  )
  
}
