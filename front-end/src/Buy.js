import "./App.css";
import GetBuy from "./expressConnections/GET/getBuy";
import BuyForm from "./expressConnections/POST/buyForm";

import React from "react";

export default function BuyPage() {

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <h3 className="text">Buy:</h3>
      <BuyForm/>
      <br></br>
      <h3 className="text">Coins:</h3>
      <GetBuy />
    </div>
  );
}