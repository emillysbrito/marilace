import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.tsx'
import { FirebaseConexao } from './firebase/FirebaseConexao.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirebaseConexao/>
    <App />
  </StrictMode>,
)