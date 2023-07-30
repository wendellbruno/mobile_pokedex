import {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Pokemon} from '../model';
import {geracao01} from '../data'
import {endpointPokes,pokeApi} from '../service/';
import {writeFile} from 'fs'


type Context = {
    pokemonList: Pokemon[],
    loading: boolean,
    //geracao: number;
    selectGeneration: (geracao: number) => void;
    cathProkemon: (catchPoke: boolean) => boolean
}

const PokeContext = createContext<Context>({} as Context);

type Props = {
    children? : React.ReactNode
}
export const PokeProvider: React.FC<Props> = ({children}) => {

    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [pokeListCatch, setPokeListCatch] = useState<Pokemon[]>([]);
    const [geracao, setGeracao] = useState<number>(8);
    const [loading, setLoading] = useState(false);
    const [catcher, setCatcher] = useState(false);

    useEffect(()=>{
        loadListPokemon();
    },[]);

    useEffect(()=>{
        loadListPokemon();
    },[geracao]);

    //useEffect(()=>{},[pokeListCatch]);

    async function loadListPokemon(): Promise<void>{
        let list: Pokemon[] = []
        try {
            setLoading(true);
            const pokes = await endpointPokes(geracao)
            pokes?.map(elemento => {
                list.push({
                    catch: catcher,
                    height: elemento.data.height,
                    id: elemento.data.id,
                    image: elemento.data.sprites.front_default,
                    weight: elemento.data.weight,
                    name: elemento.data.name,
                    stats: elemento.data.stats,
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

    function selectGeneration(geracao: number){
        setGeracao(geracao)
    } 

    function cathProkemon(cathcerPoke: boolean){
        setCatcher(!cathcerPoke)
        return catcher
    }

    return (
        <PokeContext.Provider value={{pokemonList, loading, selectGeneration, cathProkemon}} >
            {children}
        </PokeContext.Provider>
    )
   
}

//hook perssonalizado
export function useGlobalContext(){
    const context = useContext(PokeContext);
    return context;
}