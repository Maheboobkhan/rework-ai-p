import React from "react";
import "./App.css";
import Home from './pages/Home'
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
<<<<<<< HEAD
import SignUp from "./pages/SignUp";
=======
import ViewAllProfileCard from "./pages/ViewAllProfileCard";
>>>>>>> 4070e6f59e9575a8e396995a73915f21a85acc2f

function App() {


  const router = createBrowserRouter([{
    path: "/",
    children: [
      { path: "/", element: <Home /> },
<<<<<<< HEAD
      { path: "/signup", element: <SignUp /> },
=======
      { path: "/view-all-profile-cards", element: <ViewAllProfileCard /> },
>>>>>>> 4070e6f59e9575a8e396995a73915f21a85acc2f
    ],
  }])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
