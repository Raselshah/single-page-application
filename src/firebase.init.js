// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcrzrpdpnGj_44tetURSmajY-Jw9FVtD0",
  authDomain: "fitlife-gym.firebaseapp.com",
  projectId: "fitlife-gym",
  storageBucket: "fitlife-gym.appspot.com",
  messagingSenderId: "257585294519",
  appId: "1:257585294519:web:765595442a86e18da1f132",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
