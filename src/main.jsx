import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import AboutMe from './AboutMe.jsx';
import Experience from './Experience.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"",
        element: <AboutMe />
      },
      {
        path:"AboutMe",
        element: <AboutMe />
      },
      {
        path:"Experience",
        element: <Experience />
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
