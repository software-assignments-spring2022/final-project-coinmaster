import "./App.css";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//import Home from "./components/screens/Home/Home";
//import Portfolio from "./components/screens/Portfolio/Portfolio";
import Table from "./components/screens/Coins/Coins";
import Navbar from "./components/Navbar";
//this line imports bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import coin_pic_1 from "/Users/keshnen/Documents/final-project-coinmaster/front-end/src/media/coin-pic-1.png";
//IMPORT YOUR MAIN COMPONENT HERE;
//FOR EXAMPLE IF YOU ARE WORKING ON REGISTER
//import register from ....

/* 
//Below is to use routing
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Coin from "./Coin";
import Compare from "./Compare";
import Learn from "./Learn";
import Register from "./Register";
import Login from "./Login";
import Portfolio from "./Portfolio";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="./components/screens/Home/Home.js" component={Home} />
      <Route path="./components/screens/Coin/Coin.js" component={Coin} />
      <Route
        path="./components/screens/Compare/Compare.js"
        component={Compare}
      />
      <Route path="./components/screens/Learn/Learn.js" component={Learn} />
      <Route
        path="./components/screens/Register/Register.js"
        component={Register}
      />
      <Route path="./components/screens/Login/Login.js" component={Login} />
      <Route
        path="./components/screens/Portfolio/Portfolio.js"
        component={Portfolio}
      />
    </Switch>
  </BrowserRouter>,
  rootElement
);

*/

function App() {
  return (
    <div className="App">
      {/*replace this line with you component, for example "<Register/>" */}
      <Navbar />
      <Table />
      <h1>Compare Coins?</h1>
      <br></br>
      <button type="button" class="btn btn-dark btn-lg">
        Compare
      </button>
      {/* I dont think we need this image - looks messy */}
      {/*       <br></br>
      <br></br>
      <br></br>
      <br></br>
      <img src={coin_pic_1} href="Home" /> */}
      <br></br>
      <br></br>
      <br></br>
      <h1>Get Started Today!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <br></br>
      <button type="button" class="btn btn-dark btn-lg">
        Register
      </button>
      {/*Note: this won't actually won't be where your screen is going to live
      this will probably be something like Routes, but for now this is how we can test locally. */}
    </div>
  );
}
export default App;
