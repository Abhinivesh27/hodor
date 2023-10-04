import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


window.flag = process.env.REACT_APP_CONSOLE2;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
