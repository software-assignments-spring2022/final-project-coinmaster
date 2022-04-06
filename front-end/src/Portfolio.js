import "./App.css";
import Porfolio from "./components/screens/Portfolio/Portfolio";
import GetPortfolio from "./expressConnections/GET/getPortfolio";

import React, { useState } from "react";

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
      <GetPortfolio />
      <Porfolio />
    </div>
  );
}

export default Portfolio;
