import React from "react";
import "./App.css";
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
// import { RouterProvider } from "react-router";
import ViewAllProfileCard from "./pages/ViewAllProfileCard";
import SignUp from "./pages/Signup";

function App() {


  // const router = createBrowserRouter([{
  //   path: "/",
  //   children: [
  //     { path: "/", element: <Home /> },
  //     { path: "/view-all-profile-cards", element: <ViewAllProfileCard /> },
  //   ],
  // }])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-all-profile-cards" element={<ViewAllProfileCard />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
