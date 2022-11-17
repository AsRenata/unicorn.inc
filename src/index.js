import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from "./GlobalStyles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

