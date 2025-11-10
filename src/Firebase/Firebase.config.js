// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdqwf7EvAJo9Z26kuZwf5NrWGqNulRryQ",
  authDomain: "home-nest-estate-app.firebaseapp.com",
  projectId: "home-nest-estate-app",
  storageBucket: "home-nest-estate-app.firebasestorage.app",
  messagingSenderId: "1059920205399",
  appId: "1:1059920205399:web:3bb2d7a43d4df8cf3eb512"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;