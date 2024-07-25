import {Route, Routes} from "react-router";
import {ReactRepaso} from "../ReactRepaso.jsx";
import {MemesApp} from "../components/index.js";
import {NavBar} from "../ui/index.js";

export const AppRoute = () => {
    return(
        <>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path='*' element={<ReactRepaso />} />
                    <Route path='/memes-app' element={<MemesApp />} />
                </Routes>
            </div>
        </>
    )
}