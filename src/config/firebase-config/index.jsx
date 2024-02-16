// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCptJXvHN0hDHDUMimcBSRebJVEm8U06Ks",
    authDomain: "react-signup-form-988ae.firebaseapp.com",
    projectId: "react-signup-form-988ae",
    storageBucket: "react-signup-form-988ae.appspot.com",
    messagingSenderId: "192709854151",
    appId: "1:192709854151:web:b8e357767c2316cb7b8fe2"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);


export { firebase_app, auth }