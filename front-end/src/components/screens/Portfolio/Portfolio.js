import Navbar from "../../Navbar";
import "./Portfolio.css";
import React, { useState } from 'react';

function Portfolio(props){

    const [ownedCryptos,setOwnedCryptos] = useState([["1","Lorem","$100.00","$100M"]]);

    return (
        <>
            <Navbar/>
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
                    {ownedCryptos.map((row,i) => 
                    <tr>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                        <td>{row[3]}</td>
                    </tr>)}
                </tbody>
                </table>
            </div>
        </>
      )
}


export default Portfolio;