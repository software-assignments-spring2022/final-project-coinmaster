require("./Coins.css");

import React from "react";
import { Link } from "react-router-dom";

class Coin {
  constructor(name, price, marketCap) {
    //this.rank = height;
    this.Rank = "CODE WILL CHANGE THIS STRING TO RANK WHEN LOADING TABLE";
    this.Name = name;
    this.Price = price;
    this.MarketCap = marketCap;
  }
}

const cryptoCurriences = [
  //new Coin (name, price, marketCap)
  new Coin("Bitcoin", 9999999, "23452345"),
  new Coin("Ethereum", 66666, "76896789"),
  new Coin("Binance Coin", 333333, "123412"),
  new Coin("XRP", 4444444, "678678567"),
];

function Table() {
  return (
    <div className="Coins">
      <Link to="/Home">
        <button>Go to Page 2</button>
      </Link>

      <table className="table table-hover">
        <thead class="table-light">
          <tr>
            {Object.getOwnPropertyNames(cryptoCurriences[0]).map(
              (headerName) => {
                return <td>{headerName}</td>;
              }
            )}
          </tr>
        </thead>
        <tbody>
          {cryptoCurriences.map((val, key) => {
            return (
              <tr key={key}>
                {Object.values(val).map((headerValue) => {
                  headerValue ===
                  "CODE WILL CHANGE THIS STRING TO RANK WHEN LOADING TABLE"
                    ? (headerValue = key)
                    : (headerValue = headerValue);
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

export default Table;
