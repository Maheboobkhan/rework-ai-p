import React from "react";
import "./App.css";
import Home from './pages/Home'
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import SignUp from "./pages/SignUp";

function App() {


  const router = createBrowserRouter([{
    path: "/",
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <SignUp /> },
    ],
  }])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
