import {Navigate} from "react-router";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({children}) => {

    const isLogged = true;
    return (isLogged) ? children : <Navigate to='/login' />

}

