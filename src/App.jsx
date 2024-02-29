import React from "react";
import "./App.css";
import Home from './pages/Home'
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import ViewAllProfileCard from "./pages/ViewAllProfileCard";

function App() {


  const router = createBrowserRouter([{
    path: "/",
    children: [
      { path: "/", element: <Home /> },
      { path: "/view-all-profile-cards", element: <ViewAllProfileCard /> },
    ],
  }])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
