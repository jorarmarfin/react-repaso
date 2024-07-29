import {login, logout} from "../slices/AuthSlice.jsx";
import {loginFirebase, loginGoogle, logoutFirebase} from "../../firebase/provider.js";
import {onAuthStateChanged} from "firebase/auth";
import {FirebaseAuth} from "../../firebase/config.js";

export const loginThunk = (email,password) => {
    return async (dispatch, getState) => {

        const resp = await loginFirebase({email, password});

        dispatch(login({email:resp.email,name:resp.displayName,photo:resp.photoURL}));

    }

}

export const loginGoogleThunk = () => {
    return async (dispatch, getState) => {
        const resp = await loginGoogle()
        dispatch(login({email:resp.email,name:resp.displayName,photo:resp.photoURL}));

    }
}

export const logoutThunk = () => {
    return async (dispatch, getState) => {
        await logoutFirebase();
        dispatch(logout());
    }
}

export const checkAuthThunk = () => {
    return async (dispatch, getState) => {
        onAuthStateChanged(FirebaseAuth,async (user) => {
            if(user){
                dispatch(login({email:user.email,name:user.displayName,photo:user.photoURL}));
            }else{
                logoutThunk();
            }
        });
    }
}