import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Nav from './components/Navbar/Nav';
import Home from './components/Home/Mainpage/Home';
import About from './components/About/Mainpage/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav/>,
    children:[

      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "About",
        element: <About/>,
      },
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

