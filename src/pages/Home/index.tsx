import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {pokeApi, endpointPokes} from '../../service';
import { AxiosResponse } from 'axios';
import {InputSearch, SelectedGeracao} from '../../components'

import { Container } from './styles';

export const Home: React.FC = () => {

    const [pokes,setPokes] = useState<AxiosResponse[] | void >([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function handlePokeApi(): Promise<void> {
          setLoading(true);
          const pokesApi: AxiosResponse[] | void = await endpointPokes(1)
          setLoading(false)
          setPokes(pokesApi)
        }
        handlePokeApi();
        
    },[])

  return (
    <Container>
        <InputSearch />
        <SelectedGeracao />
    </Container>
  )
  
}
