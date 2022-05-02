import "./App.css";
import Table from "./components/screens/Coins/Coins";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from 'react'
import axios from 'axios';
import CryptoTable from "./components/CryptoTable"

export default function CoinPage() {

  const [messages, setMessages] = useState([])
  const [cryptoTableData, setCryptoTableData]  = useState([])
  const [tableColumns, setTableColumns] = useState(["SYMBOL", "NAME", "RANK", "PRICE", "MARKET CAP"])
  const [error, setError] = useState('')

  const fetchMessages = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/sell`)
      .then(response => {
        const messages = response.data

        let cryptoTableData = [];
    
        messages.cryptoData.map((element) => {
          cryptoTableData.push ({
            symbol: element.symbol,
            name:element.name,
            rank: element.rank,
            price: element.price,
            market_cap:element.market_cap
          })
        })

        setCryptoTableData(cryptoTableData);
        setMessages(messages)
      })
      .catch(err => {
        setError(err)
      })
  }

  useEffect(() => {
    fetchMessages()

    const intervalHandle = setInterval(() => {
      fetchMessages()
    }, 500000000000000)

    return e => {
      clearInterval(intervalHandle)
    }
  }, []) 
  

  return (
    <div>
      <div className="App">
        <br></br>
        <br></br>
        <CryptoTable data={cryptoTableData} columns={tableColumns}/>
        <br></br>
        <h1>Compare Coins?</h1>
        <br></br>

        <Link to="/compare">
          <button className="btn btn-dark btn-lg">Compare</button>
        </Link>

        <br></br>
        <br></br>
        <br></br>
        <h1>Get Started Today!</h1>
        <p>
        Paper trading on Coinmaster allows you to trade using real-life exchange data with simulated crypto.
        This way, you can experience trading without taking any risk.
        Are you interested simply because of cryptocurrency’s trendiness? 
        Or is there a more compelling reason for an investment in one or more specific
        digital tokens? Of course, different investors have various personal investment goals, 
        and exploring the cryptocurrency space may make more sense for some individuals than for others.
        </p>
        <br></br>

        <Link to="/register">
          <button type="button" class="btn btn-dark btn-lg">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
