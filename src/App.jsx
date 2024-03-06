import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Red from "./routes/Red";
import Green from "./routes/Green";
import Blue from "./routes/Blue";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Red />} />
        <Route path="/green" element={<Green />} />
        <Route path="/blue" element={<Blue />} />
      </Routes>
    </>
  );
}

export default App;
