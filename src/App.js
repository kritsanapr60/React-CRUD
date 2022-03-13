import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Users from "./components/Users";
import UserCreate from "./components/UserCreate";
import UserUpdate from "./components/UserUpdate";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<UserCreate />} />
        <Route path="/update/:id" element={<UserUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
