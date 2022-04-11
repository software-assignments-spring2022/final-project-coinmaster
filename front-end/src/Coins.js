import "./App.css";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//import Home from "./components/screens/Home/Home";
//import Portfolio from "./components/screens/Portfolio/Portfolio";
import Table from "./components/screens/Coins/Coins";
//this line imports bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
//import coin_pic_1 from "/Users/keshnen/Documents/final-project-coinmaster/front-end/src/media/coin-pic-1.png";
//IMPORT YOUR MAIN COMPONENT HERE;
//FOR EXAMPLE IF YOU ARE WORKING ON REGISTER
//import register from ....
import React, { useState } from "react";
import { useEffect } from 'react'
import axios from 'axios';
import CryptoTable from "./components/CryptoTable"

export default function CoinPage() {

  const [messages, setMessages] = useState([])
  const [cryptoTableData, setCryptoTableData]  = useState([])
  const [tableColumns, setTableColumns] = useState(["SYMBOL", "NAME", "RANK", "PRICE", "MARKET CAP"])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')
  const [feedback, setFeedback] = useState('')

  /**
   * A nested function that fetches messages from the back-end server.
   */
  const fetchMessages = () => {
    // setMessages([])
    // setLoaded(false)
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/sell`)
      .then(response => {
        // axios bundles up all response data in response.data property
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
      .finally(() => {
        // the response has been received, so remove the loading icon
        setLoaded(true)
      })
  }

  // set up loading data from server when the component first loads
  useEffect(() => {
    // fetch messages this once
    fetchMessages()

    // set a timer to load data from server every n seconds
    const intervalHandle = setInterval(() => {
      fetchMessages()
    }, 500000000000000)

    // return a function that will be called when this component unloads
    return e => {
      // clear the timer, so we don't still load messages when this component is not loaded anymore
      clearInterval(intervalHandle)
    }
  }, []) // putting a blank array as second argument will cause this function to run only once when component first loads
  










  return (
    <div>
      <div className="App">
        {/*replace this line with you component, for example "<Register/>" */}
        <br></br>
        <br></br>
        <CryptoTable data={cryptoTableData} columns={tableColumns}/>
        {/* <Table /> */}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <br></br>

        <Link to="/register">
          <button type="button" class="btn btn-dark btn-lg">
            Register
          </button>
        </Link>

        {/*Note: this won't actually won't be where your screen is going to live
      this will probably be something like Routes, but for now this is how we can test locally. */}
      </div>
    </div>
  );
}
