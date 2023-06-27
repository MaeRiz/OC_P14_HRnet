import React from 'react';
import './scss/index.scss'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Employees from './pages/Employees'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
