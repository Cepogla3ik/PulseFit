import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss'
import Index from '../pages/Index/Index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Index />
  </StrictMode>,
)
