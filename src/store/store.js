import {configureStore} from "@reduxjs/toolkit";
import {CounterSlice} from "./slices/CounterSlice.jsx";
import {PokemonSlice} from "./slices/PokemonSlice.jsx";

export const store = configureStore({
    reducer: {
        counter: CounterSlice.reducer,
        pokemon: PokemonSlice.reducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false
    // })
});