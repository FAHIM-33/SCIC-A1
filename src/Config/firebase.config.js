// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmSLo5PtExENNnfKtEJmY9BKRV5QCArVg",
  authDomain: "assignment-11-f750c.firebaseapp.com",
  projectId: "assignment-11-f750c",
  storageBucket: "assignment-11-f750c.appspot.com",
  messagingSenderId: "1069546448707",
  appId: "1:1069546448707:web:d8e284f8e052b0b79ab1f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;