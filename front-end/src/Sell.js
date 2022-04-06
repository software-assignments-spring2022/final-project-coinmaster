import "./App.css";
//import Sell from "./components/screens/Buy/Sell";
import GetSell from "./expressConnections/GET/getSell";
import SellForm from "./expressConnections/POST/sellForm";

export default function CoinPage() {
  return (
    <div>

      {/* ADD TABLE UP HERE */}

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <SellForm />
      <GetSell />

    </div>
  );
}