import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>

  /*
    Tip 💡: using strict mode helps write better code
    
    Enabled ✅: 
      - Component is mounted
      - Component is unmounted
      - Component is mounted, Again
    (this helps react to check of issues and stop them)

    Disabled ❌:
      - Component is mounted (once)
   */
);
