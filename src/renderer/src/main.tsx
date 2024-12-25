import './assets/tailwind.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import Routing from './Routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routing />
    </Router>
  </StrictMode>
)
