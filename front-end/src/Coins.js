import "./App.css";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//import Home from "./components/screens/Home/Home";
//import Portfolio from "./components/screens/Portfolio/Portfolio";
import Table from "./components/screens/Coins/Coins";
//this line imports bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
//import coin_pic_1 from "/Users/keshnen/Documents/final-project-coinmaster/front-end/src/media/coin-pic-1.png";
//IMPORT YOUR MAIN COMPONENT HERE;
//FOR EXAMPLE IF YOU ARE WORKING ON REGISTER
//import register from ....

export default function CoinPage() {
  return (
    <div>
      <div className="App">
        {/*replace this line with you component, for example "<Register/>" */}
        <Table />
        <h1>Compare Coins?</h1>
        <br></br>

        <Link to="/compare">
          <button className="btn btn-dark btn-lg">Compare</button>
        </Link>

        <br></br>
        <br></br>
        <br></br>
        <h1>Get Started Today!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <br></br>

        <Link to="/register">
          <button type="button" class="btn btn-dark btn-lg">
            Register
          </button>
        </Link>

        {/*Note: this won't actually won't be where your screen is going to live
      this will probably be something like Routes, but for now this is how we can test locally. */}
      </div>
    </div>
  );
}
