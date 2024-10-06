// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoT6d0pZjrjoQHz2sRwfbW3DO7pjVwwqU",
  authDomain: "kodigo-music-4f81e.firebaseapp.com",
  projectId: "kodigo-music-4f81e",
  storageBucket: "kodigo-music-4f81e.appspot.com",
  messagingSenderId: "936725205452",
  appId: "1:936725205452:web:5190f4c2550353e5fc0d69"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase