import {useForm} from "../hooks/useForm.js";
export const MemesApp = () => {

    const{search,onInputChange} = useForm({
        search: '',
    });
    const onSubmit = (e) => {
        e.preventDefault();
        console.log({search});
    }

    return (
        <>
            <h1 className='mt-5'>Memes App</h1>
            <form onSubmit={onSubmit} className='flex gap-2 mt-5'>
                <input
                    onChange={onInputChange}
                    type="text" name="search" placeholder="Search" className='rounded-lg w-2/3 ' />
                <button type='submit' className='btn w-1/3'>Buscar</button>
            </form>

        </>
    )
}