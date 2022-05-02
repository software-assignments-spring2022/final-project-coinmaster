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
        <Route exact path="/client" element={<Home />} />
        <Route exact path="/client/coins" element={<Coins />} />
        <Route exact path="/client/compare" element={<Compare />} />
        <Route exact path="/client/login" element={<Login />} />
        <Route exact path="/client/logout" element={<Logout />} />
        <Route exact path="/client/register" element={<Register />} />
        <Route exact path="/client/portfolio" element={<Portfolio />} />
        <Route exact path="/client/learn" element={<Learn />} />
        <Route exact path="/client/buy" element={<Buy />} />
        <Route exact path="/client/sell" element={<Sell />} />
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;
