import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route  } from "react-router";
import App from './App.jsx'
import Login from './Components/Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="authentication" element={<Login />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
// https://api.thenewsapi.com/v1/news/top?api_token=5le45unAd3gsS4lLT8VzoSmrXjHh0LnadDd1tEhF&locale=us&limit=3