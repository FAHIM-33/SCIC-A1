// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqDCNTTVllVwx986u3BB-BWOeuTuSq66k",
  authDomain: "libraryv2-d6e10.firebaseapp.com",
  projectId: "libraryv2-d6e10",
  storageBucket: "libraryv2-d6e10.appspot.com",
  messagingSenderId: "371781100048",
  appId: "1:371781100048:web:40b5241a3934a150a12095"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;