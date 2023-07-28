import React, {useEffect, useState, useContext} from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import {pokeApi, endpointPokes} from '../../service';
import { AxiosResponse } from 'axios';
import {InputSearch, SelectedGeracao, ListPokemon} from '../../components'
import {useGlobalContext, PokeContext} from '../../Context';

import { Container } from './styles';

export const Home: React.FC = () => {

  const {pokemonList} = useGlobalContext();

   /*  const [pokes,setPokes] = useState<AxiosResponse[] | void >([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function handlePokeApi(): Promise<void> {
          setLoading(true);
          const pokesApi: AxiosResponse[] | void = await endpointPokes(1)
          setLoading(false)
          setPokes(pokesApi)
        }
        handlePokeApi();
        
    },[]) */

  return (
    <Container>
        <InputSearch />
        <SelectedGeracao />
       {/*  <FlatList
        data={pokemonList}
        renderItem={({item}) => <Text>{item.name}</Text>}
        
        /> */}
        <ListPokemon pokemon={pokemonList}   />
    </Container>
  )
  
}
