import { createSlice } from '@reduxjs/toolkit';

export const PokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        pokemon: {},
        loading: false,
    },
    reducers: {
        startSearch: (state, /* action */ ) => {
            state.loading = true;
        },
        setPokemons: (state, action) => {
            state.loading = false;
            state.pokemons = action.payload;
            state.pokemon = {};
        },
        setPokemon: (state, action) => {
            state.loading = false;
            state.pokemon = action.payload;
            state.pokemons = [];
        },
    }
});


// Action creators are generated for each case reducer function
export const {
    startSearch,
    searchSuccess,
    setPokemon,
    setPokemons
} = PokemonSlice.actions;
