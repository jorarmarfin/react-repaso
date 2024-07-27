import {Route, Routes} from "react-router";
import {ReactRepaso} from "../ReactRepaso.jsx";
import {JournalApp, MemesApp, PokemonApp} from "../components/index.js";
import {NavBar} from "../ui/index.js";
import {PrivateRoute} from "./PrivateRoute.jsx";
import {Login} from "../components/auth/Login.jsx";

export const AppRoute = () => {
    return(
        <>
            <NavBar />
            <div className="container px-4">
                <Routes>
                    <Route path='/' element={<ReactRepaso />} />
                    <Route path='/memes-app' element={<MemesApp />} />
                    <Route path='/journal-app' element={<JournalApp />} />
                    <Route path='/pokemon-app' element={<PokemonApp />} />
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