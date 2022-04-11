// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzZD2ldcocixyehj7-DDijoEeHBlgTzk8",
    authDomain: "ema-john-simple-9eac6.firebaseapp.com",
    projectId: "ema-john-simple-9eac6",
    storageBucket: "ema-john-simple-9eac6.appspot.com",
    messagingSenderId: "112686579078",
    appId: "1:112686579078:web:77d2842efa53aeb74dc007"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;