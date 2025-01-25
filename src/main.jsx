import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// https://api.thenewsapi.com/v1/news/top?api_token=5le45unAd3gsS4lLT8VzoSmrXjHh0LnadDd1tEhF&locale=us&limit=3