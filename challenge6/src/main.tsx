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
import Home from './pages/Home'
import Jobs from './pages/Jobs'

const router =  createBrowserRouter(
  [
    {
      path:"/",
      element:  <Home />,
      loader: async () => {
        return fetch("./data.json");
      }
    },
    {
      path: '/jobs',
      element: <Jobs />,
      loader:async () => {
        return fetch("./data.json");//this loader function will only return a singal job description in the end;
      }
    }
  ]
);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
)
