// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getEnvironments} from "../helpers/getEnvironments.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {VITE_FIREBASE_API_KEY,VITE_FIREBASE_API_ID} = getEnvironments();
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: VITE_FIREBASE_API_KEY,
    authDomain: "react-jamc.firebaseapp.com",
    projectId: "react-jamc",
    storageBucket: "react-jamc.appspot.com",
    messagingSenderId: "898033269988",
    appId: VITE_FIREBASE_API_ID
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(firebaseApp);