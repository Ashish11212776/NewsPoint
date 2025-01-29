import { StrictMode } from 'react';
import { createRoot,Routes, Route } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ FIXED IMPORT
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <App/>
    </BrowserRouter>
  </StrictMode>
);
