import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// references to the #root id in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* refers to the all the modifications made in App.js */}
  </React.StrictMode>
);
