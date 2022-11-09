
import {
  RouterProvider,
  createBrowserRouter,
 
  
} from 'react-router-dom'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import ErrorBoundary from './components/ErrorBoundary'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient();
const router =  createBrowserRouter(
  [
    {
      path:"/",
      element:  <Home />,
      // loader: homeLoader(queryClient),
      errorElement: <ErrorBoundary />
    },
    {
      path: '/jobs/:id',
      element: <Jobs />,
      // loader: jobLoader(queryClient),
      errorElement: <ErrorBoundary />
    }
  ],
  
);

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    
  )
}

export default App
