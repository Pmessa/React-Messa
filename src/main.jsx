import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDwC4stQ03Uwr9iI1RuGB5RARwSWlIuH_M",
  authDomain: "evolucion-pant-based.firebaseapp.com",
  projectId: "evolucion-pant-based",
  storageBucket: "evolucion-pant-based.appspot.com",
  messagingSenderId: "893116771208",
  appId: "1:893116771208:web:cbbb212a6e53c4e2ac683d"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
