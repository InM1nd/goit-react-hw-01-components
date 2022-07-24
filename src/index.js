import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'App';
import './index.css';

const ROOT_ELEMENT = document.querySelector('#root');

ReactDOM.createRoot(ROOT_ELEMENT).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
