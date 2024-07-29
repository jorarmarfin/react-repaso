import { GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword } from "firebase/auth";
import {FirebaseAuth} from "./config.js";

const googleProvider = new GoogleAuthProvider();

export const loginGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const {displayName,email,photoURL,uid} = result.user;
        return {
            ok:true,
            displayName,email,photoURL,uid};
    }catch (e) {
        const errorCode = e.code;
        const errorMessage = e.message;
        return {
            ok:false,
            errorCode,
            errorMessage
        }
    }
}

export const registerUser = async ({email, password, name}) => {
    try {
        console.log(email, password, name);
        const result = await createUserWithEmailAndPassword(FirebaseAuth,email,password);
        console.log(result);
        const {photoURL,uid} = result.user;
        await updateProfile(FirebaseAuth.currentUser, {displayName:name});
        return {
            ok:true,
            name,email,photoURL,uid};
    }catch (e) {
        console.log(e);
        const errorCode = e.code;
        const errorMessage = e.message;
        return {
            ok:false,
            errorCode,
            errorMessage
        }
    }
}

export const loginFirebase = async ({email, password}) => {
    try{
        const result = await signInWithEmailAndPassword(FirebaseAuth,email,password);
        const {displayName,uid,photoURL} = result.user;
        return {
            ok:true,
            displayName,uid,photoURL,
            email,password};
    }catch (e) {
        const errorCode = e.code;
        const errorMessage = e.message;
        return {
            ok:false,
            errorCode,
            errorMessage
        }
    }
}

export const logoutFirebase = async () => {
    try {
        await FirebaseAuth.signOut();
        return {
            ok:true
        }
    }catch (e) {
        const errorCode = e.code;
        const errorMessage = e.message;
        return {
            ok:false,
            errorCode,
            errorMessage
        }
    }

}