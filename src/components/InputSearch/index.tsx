import React, {useState} from 'react';
import {Vibration} from 'react-native'
import { Container, BarraPesquisa } from './styles';
import { useGlobalContext } from '../../Context';




export const InputSearch: React.FC = () => {
  const [pokemon, setPokemon] = useState<string>('');

  const {showModal, allpokemonList} = useGlobalContext();

  function handleSearchPokemon(search: string ){
      const result = allpokemonList.filter(elemento => elemento.name === search.toLocaleLowerCase())
      //setPokemon('');
      if(result.length > 0 ){
       showModal(result[0])
      }else{
        Vibration.vibrate()
      }
      
  }

  return (
    <Container>
      <BarraPesquisa placeholder='Procurar' 
      inputMode='search'
      blurOnSubmit
      onChangeText={ e => setPokemon(e)} 
      value={pokemon}
      onSubmitEditing={() => handleSearchPokemon(pokemon)}
      />
    </Container> 
  )
}
