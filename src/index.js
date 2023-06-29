import React from 'react';
import './scss/index.scss'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Employees from './pages/Employees'
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
