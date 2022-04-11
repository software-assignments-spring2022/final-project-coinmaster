import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./Home";
import Coins from "./Coins";
import Compare from "./Compare"
import Login from "./Login";
import Register from "./Register";
import Portfolio from "./Portfolio";
import Learn from "./Learn";
import Messages from "./Messages";
import Buy from "./Buy";
import Sell from "./Sell";

import "bootstrap/dist/css/bootstrap.min.css";

//routing
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/coins" element={<Coins />} />
        <Route exact path="/compare" element={<Compare />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/learn" element={<Learn />} />
        <Route exact path="/messages" element={<Messages />} />
        <Route exact path="/buy" element={<Buy />} />
        <Route exact path="/sell" element={<Sell />} />
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
