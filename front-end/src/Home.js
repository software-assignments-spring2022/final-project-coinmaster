import "./css/Home.css";
import CryptoTable from "./components/CryptoTable"
import { Link } from "react-router-dom";
import React, {useState} from "react";
import axios from 'axios';
import { useEffect } from 'react'

/* const [cryptoData, setCryptoData] = useState([
  { symbol: "ETH", name: "Ethereum", rank: 2, price: "0.078420138035523", market_cap: "7847729.8474137"},
  { symbol: "BIT", name: "Bitcoin", rank: 1, price: "0.003513413523", market_cap: "337729.8474137"},
]);
const [columns,setColumns] = useState(["SYMBOL","NAME","RANK", "PRICE", "MARKET CAP"]) */

const Home = (props) => {
  const [user, setUser] = useState(localStorage.getItem("user"))
  const [email, setEmail] = useState(localStorage.getItem("email"))
  const [user_name, setUsername] = useState(localStorage.getItem("user_name"))
  const [your_name, setrealName] = useState(localStorage.getItem("your_name"))
  const [loggedIn, setLoginIn] = useState(localStorage.getItem("loggedIn"))

  return (
    <>
      <div className="Home">
            <div className="first-row">
{/*           <CryptoTable data={cryptoData} columns={columns}/> */}
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
            {!loggedIn && <h1>Get Started Here!</h1>}
            {loggedIn && <h1>Welcome Back {your_name}!</h1>}
          <div className="links">
            <div className="link-one">
                {!loggedIn && <Link to="/register">
                  <button type="button" class="button">
                    Register
                </button>
                </Link>}

                {loggedIn && <Link to="/logout">
                  <button type="button" class="button">
                    Logout
                </button>
                </Link>}

            </div>
            <div className="link-two">
                {!loggedIn && <Link to="/login">
                  <button type="button" class="button">
                    Login
                </button>
                </Link>}
            </div>
          </div>
        </div>
        </div>
    </div>
    </>
  );
}

export default Home;