// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC96LaVrseNPWQwqZbeHCpqFtBVApicsow",
  authDomain: "next-auth-6128d.firebaseapp.com",
  projectId: "next-auth-6128d",
  storageBucket: "next-auth-6128d.appspot.com",
  messagingSenderId: "864928490176",
  appId: "1:864928490176:web:076be706bb46767ef40325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
