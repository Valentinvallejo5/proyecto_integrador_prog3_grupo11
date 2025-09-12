import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';   // ✅ agrega esto
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>                                  {/* ✅ envuelve App */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
