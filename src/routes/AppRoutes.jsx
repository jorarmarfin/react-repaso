import {Route, Routes} from "react-router";
import {ReactRepaso} from "../ReactRepaso.jsx";
import {JournalApp, MemesApp, PokemonApp, TodosApp} from "../components/index.js";
import {Loading, NavBar} from "../ui/index.js";
import {PrivateRoute} from "./PrivateRoute.jsx";
import {Login} from "../components/auth/Login.jsx";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {checkAuthThunk} from "../store/thunks/AuthThunk.js";

export const AppRoute = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuthThunk())
    }, []);

    return(
        <>
            <NavBar />
            <div className="container px-4">
                <Routes>
                    <Route path='/' element={<ReactRepaso />} />
                    <Route path='/memes-app' element={<MemesApp />} />
                    <Route path='/journal-app' element={<JournalApp />} />
                    <Route path='/pokemon-app' element={<PokemonApp />} />
                    <Route path='/todos-app' element={<TodosApp />} />
                    <Route path='/loading' element={<Loading />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='*' element={
                        <PrivateRoute>

                        </PrivateRoute>
                    } />
                </Routes>
            </div>
        </>
    )
}