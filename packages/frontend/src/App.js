// src/App.js
import "./App.css";
import React from "react";
import Home from "./pages/Home/Home";
import UserPage from "./pages/UserPage";
import { Routes, Route } from "react-router-dom";
import DummyProduct from "./components/interfaces/DummyProduct";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/content" element={<UserPage />} />
      <Route path="/product/:id" element={<DummyProduct />} />
    </Routes>
  );
};

export default App;
