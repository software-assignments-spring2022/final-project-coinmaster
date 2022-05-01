 import "./App.css";
 import "./css/Portfolio.css"
import GetPortfolio from "./expressConnections/GET/getPortfolio";

import "./portfolio.css"

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Portfolio(props) {

  return (
    <div>

      <br></br>
      <GetPortfolio />

      <div className = "PortfolioInLine">
        <Link to="/buy"> <button id="button1" className="PortfolioButton btn btn-dark btn">Buy</button> </Link>
        <Link to="/sell"> <button id="button2" className="PortfolioButton btn btn-dark btn">Sell</button> </Link>
        
</div>

    </div>
  );
}

export default Portfolio;
 