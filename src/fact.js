// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkKpuLNaWyD2tiF0B6QBjRZBrwY9e3eNM",
  authDomain: "base-login-b8f3c.firebaseapp.com",
  projectId: "base-login-b8f3c",
  storageBucket: "base-login-b8f3c.appspot.com",
  messagingSenderId: "162901684211",
  appId: "1:162901684211:web:a8d2942464f46f1050ac86"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;