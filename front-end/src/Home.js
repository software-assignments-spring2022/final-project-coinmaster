import "./css/Home.css";
import CryptoTable from "./components/CryptoTable"
import { Link } from "react-router-dom";
import React, {useState} from "react";
import axios from 'axios';

function Home(props) {

  const [cryptoData, setCryptoData] = useState([
    { symbol: "ETH", name: "Ethereum", rank: 2, price: "0.078420138035523", market_cap: "7847729.8474137"},
    { symbol: "BIT", name: "Bitcoin", rank: 1, price: "0.003513413523", market_cap: "337729.8474137"},
  ]);
  const [columns,setColumns] = useState(["SYMBOL","NAME","RANK", "PRICE", "MARKET CAP"])

  return (
    <>
      <div className="Home">
        <div className="first-row">
          <CryptoTable data={cryptoData} columns={columns}/>
        </div >
        <div className="first-row">
        <div className="section-one">
          <h1>What is Coin Master?</h1>
          <p>
            For cryptocurrency investors who need to track the prices and
            latest news of cryptocurrencies—CoinMaster is a website that makes it easy
            to build a portfolio and keep track of the crypto market.
          </p>
          <p>
            If you would like to start trading without any risk, create an
            account or login. CoinMaster offers a free paper trading
            platform to learn the ins and outs of crypto trading!
          </p>
        </div>

        <div className="section-two">
          <h1>Get Started Here!</h1>
          <div className="links">
            <div className="link-one">
              <Link to="/register">
                <button type="button" class="button">
                  Register
                </button>
              </Link>
            </div>
            <div className="link-two">
              <Link to="/login">
                <button type="button" class="button">
                Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;