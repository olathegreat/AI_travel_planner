// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrH-JIM8_hh46oROQ1AWmTxL5xT3WNGB8",
  authDomain: "newtradecore.firebaseapp.com",
  projectId: "newtradecore",
  storageBucket: "newtradecore.appspot.com",
  messagingSenderId: "555724009407",
  appId: "1:555724009407:web:5b088e929fe7f2ca71bb0a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);