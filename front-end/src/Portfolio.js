import "./App.css";
import Porfolio from "./components/screens/Portfolio/Portfolio";
import GetPortfolio from "./expressConnections/GET/getPortfolio";

import "./portfolio.css"

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Portfolio(props) {
  const [ownedCryptos, setOwnedCryptos] = useState([
    ["1", "Lorem", "$100.00", "$100M"],
  ]);
  const [netProfit, setNetProfit] = useState("5.34%");
  const [allTimeHigh, setAllTimeHigh] = useState("12.44%");
  const [yearHigh, setYearHigh] = useState("9.23%");
  const [accountAge, setAccountAge] = useState("6 years");

  return (
    <div>

      <br></br>
      <GetPortfolio />


      <div className = "PortfolioInLine">
        <Link to="/buy"> <button className="PortfolioButton btn btn-dark btn ">Buy</button> </Link>

        <Link to="/sell"> <button className="PortfolioButton btn btn-dark btn">Sell</button> </Link>
        
</div>

    </div>
  );
}

export default Portfolio;
