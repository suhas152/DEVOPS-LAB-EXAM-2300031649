import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/home">Home</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}
