import {useForm} from "../../hooks/useForm.js";
import {useDispatch} from "react-redux";
import {getPokemonThunk} from "../../store/thunks/PokemonThunk.js";

export const SearchPokemon = () => {
    const{pokemon,onInputChange} = useForm([]);
    const dispatch = useDispatch();

        const onSubmit = async (e) => {
            e.preventDefault();
            dispatch(getPokemonThunk(pokemon));
        }
    return (
        <>
            <form onSubmit={onSubmit} className='flex gap-2 mt-5'>
                <input
                    onChange={onInputChange}
                    type="text" name="pokemon" placeholder="Search" className='rounded-lg w-full'/>
            </form>
        </>
    )
}