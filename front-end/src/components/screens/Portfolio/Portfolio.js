import "./Portfolio.css";
import React, { useState } from "react";

function Portfolio(props) {
  const [ownedCryptos, setOwnedCryptos] = useState([
    ["1", "Lorem", "$100.00", "$100M"],
  ]);
  const [netProfit, setNetProfit] = useState("5.34%");
  const [allTimeHigh, setAllTimeHigh] = useState("12.44%");
  const [yearHigh, setYearHigh] = useState("9.23%");
  const [accountAge, setAccountAge] = useState("6 years");

  return (
    <>
      <div className="Portfolio">
        <h1>Portfolio</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {ownedCryptos.map((row, i) => (
              <tr>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="buttons">
          <button type="button" class="btn btn-primary btn-lg">
            Buy{" "}
          </button>
          <button type="button" class="btn btn-primary btn-lg">
            Sell
          </button>
        </div>
        <h1>Your Statistics</h1>
        <table class="table">
          <tr></tr>
          <tr>
            <td scope="col">Net Profit</td>
            <td scope="col">{netProfit}</td>
          </tr>
          <tr>
            <td scope="col">All Time High</td>
            <td scope="col">{allTimeHigh}</td>
          </tr>
          <tr>
            <td scope="col">52 Week High</td>
            <td scope="col">{yearHigh}</td>
          </tr>
          <tr>
            <td scope="col">Account Age</td>
            <td scope="col">{accountAge}</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Portfolio;
