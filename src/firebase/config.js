// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqcWxHXARK0o_1M2OoNVt0m6dLQWnnSk4",
    authDomain: "react-jamc.firebaseapp.com",
    projectId: "react-jamc",
    storageBucket: "react-jamc.appspot.com",
    messagingSenderId: "898033269988",
    appId: "1:898033269988:web:7498f6c4b78606588e80f1"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(firebaseApp);