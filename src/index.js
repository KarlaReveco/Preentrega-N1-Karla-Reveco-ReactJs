
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyCFvqQv04lfbi9AA4xV_f1dbtJSEgBpij0",
  authDomain: "miappecommerce.firebaseapp.com",
  projectId: "miappecommerce",
  storageBucket: "miappecommerce.appspot.com",
  messagingSenderId: "207640923973",
  appId: "1:207640923973:web:3f413c6d3b858b5835f82c",
  measurementId: "G-K0P4GH6LBD"
}

initializeApp (firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
