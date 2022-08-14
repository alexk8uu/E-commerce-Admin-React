// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDPj4ZqpN70pEXztz6EvJSZQSSQd2-jNk",
  authDomain: "e-commerce-magdalena.firebaseapp.com",
  projectId: "e-commerce-magdalena",
  storageBucket: "e-commerce-magdalena.appspot.com",
  messagingSenderId: "829012391711",
  appId: "1:829012391711:web:e10e49c39ebd7bb5f1622a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;