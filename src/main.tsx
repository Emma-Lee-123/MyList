import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Explicitly include the .tsx extension

console.log('Initializing application'); // Debugging log

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
