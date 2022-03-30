import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Page2 from './Page2';
import Page3 from './Page3';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page-2" element={<Page2 />} />
        <Route path="/page-3" element={<Page3 />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
