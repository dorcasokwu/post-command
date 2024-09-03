import React from "react";
import logo from "./logo.svg";
import Home from "./Homepage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./components/Screams/LoginScreams/LogIn";
import Hero from "./components/Herosection/Hero";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Example />} />
          <Route path="/About" element={<Hero />} />
          <Route path="/Contact" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
