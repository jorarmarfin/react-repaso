import {GetMeme} from "./GetMeme.jsx";
import {useState} from "react";

export const MemesApp = () => {

    const [memes, setMemes] = useState([]);
    return (
        <>
            <h1 className='mt-5'>Memes App</h1>
            <p>El componente padre, muestra en un listado los memes, pero tiene un componente hijo que contiene el
                formulario, y el padre crea un useSate, y le envía el setState al componente hijo, y el componente hijo
                lo usa para ingresar un nuevo valor
            </p>
            <GetMeme setMemes={setMemes} />
            <hr className='my-4' />
            <div>
                <h2>Resultados</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        memes.map((meme, index) => (
                            <div className='card' key={index}>
                                <img src={meme.url} alt={meme.title} className='rounded-lg'/>
                                <p>{meme.title}</p>
                            </div>
                        ))
                    }

                </div>
            </div>

        </>
    )
}