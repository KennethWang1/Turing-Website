import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Links from './Links.js';
import Game from './Game.js';
import reportWebVitals from './reportWebVitals';
import { Header } from './common.js';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
      <Router>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/game" element={<Game/>}></Route>
          <Route path="/links" element={<Links/>}></Route>
        </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
