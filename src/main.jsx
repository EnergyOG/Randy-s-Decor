import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { router } from './router'
import './index.css'

// Create a new router instance
const routerInstance = createRouter({ routeTree: router.routeTree })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerInstance} />
  </StrictMode>
)
