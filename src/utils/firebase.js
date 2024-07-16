// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4b9wNTevUGCuM1p3Sfc6_c9nD7Fl3EUA",
  authDomain: "netflix-ai-986f0.firebaseapp.com",
  projectId: "netflix-ai-986f0",
  storageBucket: "netflix-ai-986f0.appspot.com",
  messagingSenderId: "1078690851163",
  appId: "1:1078690851163:web:14b2644c47df6f896a127e",
  measurementId: "G-0FNGFFH576",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
