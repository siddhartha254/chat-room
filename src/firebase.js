// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";

import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebase = {
  apiKey: "AIzaSyDY0Ku_ob8hJNEu3pGsh55ihwQyTOxVnSU",
  authDomain: "chat-room-26fe6.firebaseapp.com",
  projectId: "chat-room-26fe6",
  storageBucket: "chat-room-26fe6.appspot.com",
  messagingSenderId: "187252029405",
  appId: "1:187252029405:web:21ea39ab1123b4f9f36834"
};

// Initialize Firebase
const app = initializeApp(firebase);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
