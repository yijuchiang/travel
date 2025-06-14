import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@/assets/css/index.css'
import '@/mock/index.js'

// 選取 id = root 的節點，並且將 App 頁面放進 id = root 的節點裡面
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
