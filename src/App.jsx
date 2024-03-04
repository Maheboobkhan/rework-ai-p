import React from "react";
import "./App.css";
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import ViewAllProfileCard from "./pages/ViewAllProfileCard";

function App() {
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
