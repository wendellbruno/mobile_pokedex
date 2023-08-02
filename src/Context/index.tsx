import {createContext, useState, useEffect, useContext, useLayoutEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Pokemon} from '../model';
import {allGenerations} from '../data'


type Context = {
    pokemonList: Pokemon[],
    pokeListCatch: Pokemon[],
    loading: boolean,
    geracao: number;
    selectGeneration: (geracao: number) => void;
    cathProkemon: (poke: Pokemon) => void;
}


const PokeContext = createContext<Context>({} as Context);

type Props = {
    children? : React.ReactNode
}
export const PokeProvider: React.FC<Props> = ({children}) => {

    const [allpokemonList, setAllPokemonList] = useState<Pokemon[]>([]);
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [pokeListCatch, setPokeListCatch] = useState<Pokemon[]>([]);
    const [geracao, setGeracao] = useState<number>(0);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        console.log('primeiro')
        loadListPokemon();
    },[]);

    useEffect(()=>{
        loadListPokemon();
    },[geracao]);
   
    async function loadListPokemon(): Promise<void>{
        //AsyncStorage.removeItem('@pokedex:mobile');

        let list: Pokemon[] = []
        try {
            setLoading(true);
            const storage = await AsyncStorage.getItem('@pokedex:mobile');
            if(!storage){
                console.log('criando lista')
                AsyncStorage.setItem('@pokedex:mobile', JSON.stringify(allGenerations));
                const response = await AsyncStorage.getItem('@pokedex:mobile');
                list = response ? JSON.parse(response) : []
                setAllPokemonList(list);
                setPokemonList( allpokemonList.filter(elemento => elemento.generation === geracao))
                setPokeListCatch(allpokemonList.filter(elemento => elemento.catch === true))
                setLoading(false)
            }else{
                console.log('lista ja existe')
                const response = await AsyncStorage.getItem('@pokedex:mobile');
                list = response ? JSON.parse(response) : []
                setAllPokemonList(list);
                setPokemonList( allpokemonList.filter(elemento => elemento.generation === geracao))
                setPokeListCatch( allpokemonList.filter(elemento => elemento.catch === true))
                setLoading(false)
            }
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
         const selecionado = allpokemonList.filter(elemento => elemento.id === poke.id)
        if(selecionado){
            selecionado[0].catch = !selecionado[0].catch
            AsyncStorage.setItem('@pokedex:mobile',JSON.stringify(allpokemonList));
            loadListPokemon();
        } 
    }


    return (
        <PokeContext.Provider value={{pokemonList, pokeListCatch, loading, geracao, selectGeneration, cathProkemon}} >
            {children}
        </PokeContext.Provider>
    )
   
}

//hook perssonalizado
export function useGlobalContext(){
    const context = useContext(PokeContext);
    return context;
}