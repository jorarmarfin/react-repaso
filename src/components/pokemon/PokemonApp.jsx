import {SearchPokemon} from "./SearchPokemon.jsx";
import {useSelector} from "react-redux";
import {Loading} from "../../ui/index.js";


export const PokemonApp = () => {
    const {pokemons,pokemon,loading} = useSelector(state => state.pokemon);

    if(loading){
        return <Loading/>
    }

    return (
        <div className='my-4'>
            <h1>PokemonApp </h1>
            <hr/>
            <p>Aquí usamos redux, y thunks para el uso de consultas asíncronas</p>
            <SearchPokemon/>
            <div>
                {
                    pokemons.length>0
                        ?(
                            pokemons.map((pok,loop)=>(
                            <div className='card' key={pok.name}> {loop + 1}. {pok.name}</div>
                            ))
                        )
                        :(
                            <div className='card'>
                                <span className='font-bold'>{pokemon.name}</span>
                                <div className='flex'>
                                    <div>
                                        <img className='' src={pokemon.sprites?.front_default} alt={pokemon.name}/>
                                    </div>
                                    <div className='mx-2'>
                                        <p>Tamaño</p>
                                        <p>Weight: {pokemon.weight}</p>
                                        <p>Height: {pokemon.height}</p>
                                    </div>
                                    <div className='mx-2'>
                                        <p>Habilidades</p>
                                        {
                                            pokemon.abilities?.map((ability,loop)=>(
                                                <p key={loop}>{ability.ability.name}</p>
                                            ))

                                        }
                                    </div>
                                    <div>
                                        <p>Movimientos</p>
                                        {
                                            pokemon.moves?.slice(0,5).map((move,loop)=>(
                                                <p key={loop}>{move.move.name}</p>
                                            ))
                                        }
                                    </div>

                                </div>
                            </div>
                        )
                }
            </div>

        </div>
    )
}