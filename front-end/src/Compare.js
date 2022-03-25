import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./components/screens/Compare/Compare.css"
import Button from "./components/screens/Compare/DropdownButton.js";
import Table from "./components/screens/Compare/CompareTable.js";

class CoinCompare {
    constructor(price, allTimeHigh, marketCap, rank, type, algo) {
      this.price = price;
      this.allTimeHigh = allTimeHigh;
      this.marketCap = marketCap;
      this.rank = rank;
      this.type = type;
      this.algo = algo;
    }
  }

  class PropertyCompare {
    constructor(Property, coin1, coin2) {
      this.Property = Property;
      this.Coin_1 = coin1;
      this.Coin_2 = coin2;
    }
  }


  const coin1 = new CoinCompare(
    9293939,
    12938749,
    "12b",
    2,
    "Coin",
    "Algo"
  ); 
  
  const coin2 = new CoinCompare(
    23923233,
    932843,
    "1b",
    39,
    "Coin",
    "Algo"
  ); 

  const propertiesToCompare = [
    new PropertyCompare("Price", coin1.price, coin2.price),
    new PropertyCompare("All Time High", coin1.allTimeHigh, coin2.allTimeHigh),
    new PropertyCompare("Market Cap", coin1.marketCap, coin2.marketCap),
    new PropertyCompare("Rank", coin1.rank, coin2.rank),
    new PropertyCompare("Type", coin1.type, coin2.type),
    new PropertyCompare("Algorithm", coin1.algo, coin2.algo),
  ];


  function Compare(){

    const [coin1,setCoin1] = useState("Coin #1");
    const [coin2,setCoin2] = useState("Coin #2");

    return(

        <>
        <div className = 'compare'>
            
            <h3>Comparison Tool</h3>
            
            {/*Coin 1*/}
            {Button(coin1,setCoin1)}

            {/*Coin 2*/}
            {Button(coin2,setCoin2)}


            <h3>Performance</h3>

            <p>Will be filled in Later</p>

            <h3>Specification</h3>

            {Table(coin1,coin2,propertiesToCompare)}

        </div>
        </>

    );
  }

  export default Compare;