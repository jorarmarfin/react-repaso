import {useForm} from "../hooks/useForm.js";
import {useGiphy} from "../hooks/useGiphy.js";

export const GetMeme = ({setMemes}) => {
    const{search,onInputChange} = useForm({
        search: '',
    });
    const {getApiMeme} = useGiphy();
    const onSubmit = async(e) => {
        e.preventDefault();
        const data =await onGetMeme();
        setMemes(data);
    }

    const onGetMeme = async () => {
        try {
            return await getApiMeme(search);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={onSubmit} className='flex gap-2 mt-5'>
                <input
                    onChange={onInputChange}
                    type="text" name="search" placeholder="Search" className='rounded-lg w-2/3 '/>
                <button type='submit' className='btn w-1/3'>Buscar</button>
            </form>
        </>
    )
}