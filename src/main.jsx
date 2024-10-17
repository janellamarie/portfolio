import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

// import "./scss/custom.scss";

import App from './App.jsx'
import AboutMe from './AboutMe.jsx';
import Experience from './Experience.jsx';
import Skills from './Skills.jsx';

import './index.css'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"",
        element: <AboutMe />
      },
      {
        path:"aboutme",
        element: <AboutMe />
      },
      {
        path:"experience",
        element: <Experience />
      },
      {
        path:"skills",
        element: <Skills />
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
