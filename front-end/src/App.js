import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./Home";
import Coins from "./Coins";
import Compare from "./Compare"
import Login from "./Login";
import Register from "./Register";
import Portfolio from "./Portfolio";
import Learn from "./Learn";
import Buy from "./Buy";
import Sell from "./Sell";
import Logout from "./components/logout";

import "bootstrap/dist/css/bootstrap.min.css";

//routing
import { React, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
