 import "./App.css";
 import "./css/Portfolio.css"
import GetPortfolio from "./expressConnections/GET/getPortfolio";

import "./portfolio.css"

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Portfolio(props) {
  const [user, setUser] = useState(localStorage.getItem("user"))
  const [email, setEmail] = useState(localStorage.getItem("email"))
  const [user_name, setUsername] = useState(localStorage.getItem("user_name"))
  const [your_name, setrealName] = useState(localStorage.getItem("your_name"))
  const [loggedIn, setLoginIn] = useState(localStorage.getItem("loggedIn"))


  const login = () => {
    window.location.href = '/login'
  }

  return (
    <div>

      <br></br>
      <br></br>
      <br></br>

      {!loggedIn && login()}

      { loggedIn && (<h2>Current Portfolio</h2>)}
      <div className = "ProfileDetails">
      { loggedIn && (<h5><strong>Full Name: </strong>{your_name}</h5>)}
      { loggedIn && (<h5><strong>Username: </strong> {user_name}</h5>)}
        {loggedIn && (<h5><strong>Email: </strong>{email}</h5>)}
      </div>
      { loggedIn && (<GetPortfolio />)}
      { loggedIn && (<div className="PortfolioInLine">
        <Link to="/buy"> <button className="PortfolioButton btn btn-success btn ">Buy</button> </Link>
        <Link to="/sell"> <button className="PortfolioButton btn btn-danger btn">Sell</button> </Link> </div>)}
      </div>
  );
}

export default Portfolio;
 