import React, {useState} from 'react';
import { Container, BarraPesquisa } from './styles';


export const InputSearch: React.FC = () => {
  const [pokemon, setPokemon] = useState<string>('');


  function handleSearchPokemon(search: string | number ){
      console.log(typeof search)
  }

  return (
    <Container>
      <BarraPesquisa placeholder='Procurar' 
      onChangeText={ e => setPokemon(e)} 
      value={pokemon}
      />
    </Container>
  )
}
