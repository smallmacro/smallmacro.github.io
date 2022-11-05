import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  RouterProvider,
  createBrowserRouter,
  Route,
  Link,
  createRoutesFromElements
} from 'react-router-dom'
import Home, { homeLoader } from './pages/Home'
import Jobs, { jobLoader } from './pages/Jobs'
import ErrorBoundary from './components/ErrorBoundary'

const router =  createBrowserRouter(
  [
    {
      path:"/",
      element:  <Home />,
      loader: homeLoader,
      errorElement: <ErrorBoundary />
    },
    {
      path: '/jobs/:id',
      element: <Jobs />,
      loader: jobLoader,
      errorElement: <ErrorBoundary />
    }
  ],
  {
    basename: "/devjobs/"
  }
);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
)
