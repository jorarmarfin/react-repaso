import {configureStore} from "@reduxjs/toolkit";
import {CounterSlice} from "./slices/CounterSlice.jsx";
import {PokemonSlice} from "./slices/PokemonSlice.jsx";
import {todosRtk} from "./rtk/todosRtk.js";
import {AuthSlice} from "./slices/AuthSlice.jsx";

export const store = configureStore({
    reducer: {
        counter: CounterSlice.reducer,
        pokemon: PokemonSlice.reducer,
        auth: AuthSlice.reducer,

        [todosRtk.reducerPath]: todosRtk.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosRtk.middleware),
});