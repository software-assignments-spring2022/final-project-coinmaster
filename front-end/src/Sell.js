import "./App.css";
//import Sell from "./components/screens/Buy/Sell";
import GetSell from "./expressConnections/GET/getSell";
import SellForm from "./expressConnections/POST/sellForm";

import Portfolio from "./expressConnections/GET/getPortfolio"

export default function CoinPage() {
  return (
    <div>

      {/* ADD TABLE UP HERE */}

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <SellForm />

      <Portfolio/>

      <GetSell />

    </div>
  );
}