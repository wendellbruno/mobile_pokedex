import {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Pokemon} from '../model';
import {endpointPokes,pokeApi} from '../service';

export const PokeContext = createContext<Pokemon>({} as Pokemon);

type Props = {
    children? : React.ReactNode
}
export const PokeProvider: React.FC<Props> = ({children}) => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>();
    const [pokeListCatch, setPokeListCatch] = useState<Pokemon>();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        loadListPokemon();
    },[]);

    useEffect(()=>{},[pokeListCatch]);

    async function loadListPokemon(): Promise<void>{
        let list: Pokemon[] = [];
        try {
            const pokes = await endpointPokes(1)
            pokes?.map(elemento => {
                list.push({
                    catch: false,
                    height: elemento.data.height,
                    id: elemento.data.order,
                    image: elemento.data.sprites.front_default,
                    width: elemento.data.width,
                    name: elemento.data.name,
                    status: elemento.data.status,
                    types: elemento.data.types,
                })
            })
            setPokemonList(list); 

        } catch (error) {
            console.log(error)
            return;
        }
    }

    
    return (
        {/* <PokeContext.Provider value={pokemonList} >
            {children}
        </PokeContext.Provider> */}
    )
   
}

