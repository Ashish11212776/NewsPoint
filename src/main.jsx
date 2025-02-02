import { StrictMode } from 'react';
import { createRoot,Routes, Route } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ FIXED IMPORT
import App from './App';
import { store } from '../app/store';
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
       <App/>
    </BrowserRouter>
    </Provider>
  </StrictMode>
);
