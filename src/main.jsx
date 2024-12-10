import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log(import.meta.env.VITE_EMAIL_ADDRESS);
console.log(import.meta.env.VITE_PHONE_NUMBER);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
