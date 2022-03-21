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

                    </tbody>
                </table>
            </div>
        </>
      )
}

export default Portfolio;