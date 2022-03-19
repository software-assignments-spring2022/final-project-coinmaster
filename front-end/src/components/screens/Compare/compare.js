import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import DropdownButton from 'react-bootstrap/Dropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../../App.css';


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



 function Columns(){

    const [coin1,setCoin1] = useState("Coin #1");
    const [coin2,setCoin2] = useState("Coin #2");
    const tbCols = ["Price","All Time High","Market Cap","Rank","Type","Algorithm"];
    
    return (
        <div className = 'compare'>
            <h1>Compare</h1>

            {/*Coin 1*/}
            <div class = "dropdown">
                <Dropdown>
                <Dropdown.Toggle variant="success" >
                    {coin1}
                </Dropdown.Toggle>

                <Dropdown.Menu>
    
                    <Dropdown.Item ><div onClick={(e)=> setCoin1(e.target.textContent)}>Bitcoin BTC</div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin1(e.target.textContent)}>Ethereum ETH </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin1(e.target.textContent)}>Binance Coin </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin1(e.target.textContent)}>XRP XRP </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin1(e.target.textContent)}>Coin CN </div></Dropdown.Item>
                    
                </Dropdown.Menu>
            </Dropdown>
            
            {/*Coin 2*/}
            <Dropdown>
                <Dropdown.Toggle variant="success" >
                    {coin2}
                </Dropdown.Toggle>

                <Dropdown.Menu>
    
                    <Dropdown.Item ><div onClick={(e)=> setCoin2(e.target.textContent)}>Bitcoin BTC</div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin2(e.target.textContent)}> Ethereum ETH </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin2(e.target.textContent)}>Binance Coin </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin2(e.target.textContent)}>XRP XRP </div></Dropdown.Item>
                    <Dropdown.Item ><div onClick={(e)=> setCoin2(e.target.textContent)}>Coin CN </div></Dropdown.Item>
                    
                </Dropdown.Menu>
            </Dropdown>
            </div>
            


                {/* <table>
                    <tr>
                        <th></th>
                        <td>{coin1}</td>
                        <td>{coin2}</td>
                    </tr>
                {tbCols.map((header)=> (
                    <tr>
                        <th>{header}</th>
                    </tr>
            ),
            )}
             </table> */}

        <table className="table table-hover">
        <thead class="table-light">
          <tr>
              <th></th>
              <th>{coin1}</th>
              <th>{coin2}</th>
            {/* {Object.getOwnPropertyNames(propertiesToCompare[0]).map(
              (headerName) => {
                return <td>{headerName}</td>;
              }
            )} */}
          </tr>
        </thead>
        <tbody>
          {propertiesToCompare.map((val, key) => {
            return (
              <tr key={key}>
                {Object.values(val).map((headerValue) => {
                  return <td>{headerValue}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
           
    
        </div>
    );
    
    

}

export default Columns;

    