import "./App.css";
//import Sell from "./components/screens/Buy/Sell";
import GetSell from "./expressConnections/GET/getSell";

export default function CoinPage() {
  return (
    <div>
      <GetSell />
    </div>
  );
}