import "./App.css";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "./components/screens/Home/Home";
//import Portfolio from "./components/screens/Portfolio/Portfolio";
import Navbar from "./components/Navbar";
import Home from "./Coins";
import Coins from "./Coins";
import Compare from "./Compare";
import Login from "./Login";
import Register from "./Register";
import Portfolio from "./Portfolio";
import Learn from "./Learn";

//this line imports bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//import coin_pic_1 from "/Users/keshnen/Documents/final-project-coinmaster/front-end/src/media/coin-pic-1.png";
//IMPORT YOUR MAIN COMPONENT HERE;
//FOR EXAMPLE IF YOU ARE WORKING ON REGISTER
//import register from ....

//Below is to use routing
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
      </Routes>
    </BrowserRouter>
  );
}
export default App;
