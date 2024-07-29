import { useState } from 'react';
import {useGetTodoQuery} from "../store/rtk/todosRtk.js";
import {Loading} from "../ui/index.js";

export const TodosApp = () => {

    const [ todoId, setTodoId] = useState(1);
    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const { data: todo, isLoading } = useGetTodoQuery( todoId );

    const nextTodo = () => {
        setTodoId( todoId + 1 );
    }

    const prevTodo = () => {
        if ( todoId === 1 ) return;
        setTodoId( todoId - 1 );
    }

    if ( isLoading ) return <Loading />

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />

            <pre>{ JSON.stringify( todo ) }</pre>



            <button className='btn' onClick={ prevTodo }>
                Prev Todo
            </button>
            <button className='btn' onClick={ nextTodo }>
                Next Todo
            </button>
            {/*
            <ul>
                { todos.map( todo => (
                    <li key={ todo.id }>
                        <strong> { todo.completed ? 'DONE' : 'Pending' } </strong>
                        { todo.title }
                    </li>
                ) ) }
            </ul> */}



        </>
    )
}