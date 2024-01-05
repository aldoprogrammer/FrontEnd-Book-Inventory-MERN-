// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB17x-Nj4yZ0Jlrj1UJZoAlYWigL5Cngpw",
  authDomain: "mern-book-inventory-42652.firebaseapp.com",
  projectId: "mern-book-inventory-42652",
  storageBucket: "mern-book-inventory-42652.appspot.com",
  messagingSenderId: "47957326566",
  appId: "1:47957326566:web:b010828c14497729291927"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;