import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //essa parte serve para nos ajudar a descobrir erro de renderização
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

