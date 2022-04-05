import "./App.css";
//import Buy from "./components/screens/Buy/Buy";
import GetBuy from "./expressConnections/GET/getBuy";

export default function CoinPage() {
  return (
    <div>
      <GetBuy/>
    </div>
  );
}