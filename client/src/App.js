import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//page components
import Home from "./page/Home";
import Admin from "./page/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
