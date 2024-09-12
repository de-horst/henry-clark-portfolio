/**
 * @copyright 2024 de-horst
 * @licence Apache-2.0
 */

/**
 * NODE MODULES
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * COMPONENTS
 */
import App from './App.jsx'

/**
 * CSS LINK
 */
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
