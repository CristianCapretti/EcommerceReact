import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwbfQiHseCIMRT8ccSyTgdZVdSY4BpsmI",
  authDomain: "ecommercereact-e96c0.firebaseapp.com",
  projectId: "ecommercereact-e96c0",
  storageBucket: "ecommercereact-e96c0.appspot.com",
  messagingSenderId: "657499308337",
  appId: "1:657499308337:web:d3763c2c3b372bb71e3010"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


