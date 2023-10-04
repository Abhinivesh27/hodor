import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


window.flag = "ATCTF{C0NS0L3_F4AG}";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


