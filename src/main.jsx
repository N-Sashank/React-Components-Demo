import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastProvider } from './components/Toast/ToastProvider.jsx'

createRoot(document.getElementById('root')).render(

  <ToastProvider>
    <App />
  </ToastProvider>
)
