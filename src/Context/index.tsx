import {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Pokemon} from '../model';
import {endpointPokes,pokeApi} from '../service';


type Context = {
    pokemonList: Pokemon[],
    loading: boolean,
    geracao: number;
}

export const PokeContext = createContext<Context>({} as Context);

type Props = {
    children? : React.ReactNode
}
export const PokeProvider: React.FC<Props> = ({children}) => {

    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [pokeListCatch, setPokeListCatch] = useState<Pokemon[]>([]);
    const [geracao, setGeracao] = useState<number>(1);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        loadListPokemon();
    },[]);

    //useEffect(()=>{},[pokeListCatch]);

    async function loadListPokemon(): Promise<void>{
        let list: Pokemon[] = []
        try {
            setLoading(true);
            const pokes = await endpointPokes(geracao)
            pokes?.map(elemento => {
                list.push({
                    catch: false,
                    height: elemento.data.height,
                    id: elemento.data.id,
                    image: elemento.data.sprites.front_default,
                    weight: elemento.data.weight,
                    name: elemento.data.name,
                    status: elemento.data.status,
                    types: elemento.data.types,
                })
            })
            setPokemonList(list); 
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            return;
        }
    }

    return (
        <PokeContext.Provider value={{pokemonList, loading, geracao}} >
            {children}
        </PokeContext.Provider>
    )
   
}

//hook perssonalizado
export function useGlobalContext(){
    const context = useContext(PokeContext);
    return context;
}