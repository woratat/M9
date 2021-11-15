import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//page components
import Home from "./page/Home";
import Admin from "./page/Admin";
import Login from "./page/Login";
import Register from "./page/Register";
import Location from "./page/Location";
import Profile from "./page/Profile";
import Friends from "./page/Friends";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/friend" element={<Friends/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/location" element={<Location />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;