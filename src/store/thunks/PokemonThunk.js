import {setPokemon, setPokemons, startSearch} from "../slices/PokemonSlice.jsx";
import {PokeApi} from "../../services/PokeApi.js";

export const getPokemonThunk = (pokemon) => {
    return async (dispatch,getState)=>{
        // Acción de inicio
        dispatch(startSearch());
        // Operación asíncrona
        if(!isNaN(pokemon)){
            const resp = await PokeApi.get(`pokemon?limit=${pokemon}&offset=0`)
            dispatch(setPokemons(resp.data.results));
        }else{
            const resp = await PokeApi.get(`pokemon/${pokemon}`)
            // Acción de éxito
            dispatch(setPokemon(resp.data));
        }

    }
}