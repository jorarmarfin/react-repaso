import {SearchPokemon} from "./SearchPokemon.jsx";


export const PokemonApp = () => {

    return (
        <div className='my-4'>
            <h1>PokemonApp </h1>
            <hr/>
            <p>Aquí usamos redux, y thunks para el uso de consultas asíncronas</p>
            <SearchPokemon/>

        </div>
    )
}