import "./App.css";
//import Buy from "./components/screens/Buy/Buy";
import GetBuy from "./expressConnections/GET/getBuy";
import BuyForm from "./expressConnections/POST/buyForm";

export default function CoinPage() {
  return (
    <div>

      {/* ADD TABLE UP HERE */}

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <BuyForm/>
      <GetBuy />
    </div>
  );
}