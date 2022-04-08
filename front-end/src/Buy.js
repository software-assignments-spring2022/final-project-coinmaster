import "./App.css";
//import Buy from "./components/screens/Buy/Buy";
import GetBuy from "./expressConnections/GET/getBuy";
import BuyForm from "./expressConnections/POST/buyForm";


import React, {useState} from "react";

export default function CoinPage() {

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <BuyForm/>
      <GetBuy />
    </div>
  );
}