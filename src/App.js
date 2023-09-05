

import * as React from "react";


import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from "./login";
import Page1 from "./page";
import Page4 from "./page3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/page1",
    element: <Page1 />
  },
  {
    path: "/page4",
    element: <Page4 />
  },

]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>

  );
}

export default App;
