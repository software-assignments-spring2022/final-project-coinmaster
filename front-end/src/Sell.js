import "./App.css";
import "./css/Portfolio.css"
import SellForm from "./expressConnections/POST/sellForm";

import Portfolio from "./expressConnections/GET/getPortfolio"

export default function SellPage() {
  return (
    <div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h3 className="text">Sell:</h3>
      <SellForm />
      <Portfolio/>
    </div>
  );
}