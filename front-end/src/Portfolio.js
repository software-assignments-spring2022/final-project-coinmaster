import "./App.css";
import Porfolio from "./components/screens/Portfolio/Portfolio";
import GetPortfolio from "./expressConnections/GET/getPortfolio";

export default function CoinPage() {
  return (
    <div>
      <GetPortfolio />
      <Porfolio />
    </div>
  );
}
