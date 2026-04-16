import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import Rootlayout from './Layout/Rootlayout';
import Stat from './Pages/Stats/Stat';
import Homepage from './Pages/Homepage/Homepage';
import Timeline from './Pages/Timeline/Timeline';
import Error from './Pages/Errorpage/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout></Rootlayout>,
    children: [
      {
      index: true,
      element: <Homepage></Homepage>,
    },
    {
      path: "/stat",
      element: <Stat></Stat>,
    },
    {
      path: "/timeline",
      element: <Timeline></Timeline>,
    },
],
errorElement: <Error></Error>
  },
  
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />,
  </StrictMode>,
)
