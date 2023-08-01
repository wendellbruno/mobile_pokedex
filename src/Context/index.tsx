import {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Pokemon} from '../model';
import {geracao01,geracao02,geracao03,geracao04,geracao05,geracao06,geracao07,geracao08, allGenerations} from '../data'


type Context = {
    pokemonList: Pokemon[],
    loading: boolean,
    //geracao: number;
    selectGeneration: (geracao: number) => void;
    cathProkemon: (poke: Pokemon) => void;
}

const generation = [
    geracao01,
    geracao02,
    geracao03,
    geracao04,
    geracao05,
    geracao06,
    geracao07,
    geracao08
]
    


const PokeContext = createContext<Context>({} as Context);

type Props = {
    children? : React.ReactNode
}
export const PokeProvider: React.FC<Props> = ({children}) => {

    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [pokeListCatch, setPokeListCatch] = useState<Pokemon[]>([]);
    const [geracao, setGeracao] = useState<number>(1);
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
            const storage = await AsyncStorage.getItem('@pokedex:mobile');
            if(!storage){
                await AsyncStorage.setItem('@pokedex:mobile', JSON.stringify(allGenerations));
                const response = await AsyncStorage.getItem('@pokedex:mobile');
                list = response ? JSON.parse(response) : []
                setPokemonList(() => list.filter(elemento => elemento.generation === geracao))
                setLoading(false)
            }
                const response = await AsyncStorage.getItem('@pokedex:mobile');
                list = response ? JSON.parse(response) : []
                setPokemonList(() => list.filter(elemento => elemento.generation === geracao))
                setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false);
            return;
        }
    }

    function selectGeneration(geracao: number){
        setGeracao(geracao)
    } 

    async function cathProkemon(poke: Pokemon){
        poke.catch = true
        await AsyncStorage.setItem('@pokedex:mobile',JSON.stringify(pokemonList))

        //setPokemonList(pokemonList);
        //AsyncStorage.removeItem('@pokedex:mobile');
        
        
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