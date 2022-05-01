import homeIcon from "../media/home-icon.png";
import logo from "../media/logo.png";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar(props) {
  const [user, setUser] = useState(localStorage.getItem("user"))
  const [email, setEmail] = useState(localStorage.getItem("email"))
  const [user_name, setUsername] = useState(localStorage.getItem("user_name"))
  const [your_name, setrealName] = useState(localStorage.getItem("your_name"))
  const [loggedIn, setLoginIn] = useState(localStorage.getItem("loggedIn"))

  return (
    // <div class="nav-container">
    //   <nav class="navbar  navbar-dark bg-primary">
    //     <Link to="/" class="navbar-brand nav-icon">
    //       <img src={homeIcon} href="Home" />
    //     </Link>
    //     <h1 class="navbar-brand display-1">Coin Master</h1>
    //     <img src={logo} class="navbar-brand nav-icon" href="Home" />
    //   </nav>
    // </div>
  <>
  <div class="header"><div class="title">Coin Master</div></div>
  <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"/>
  <label for="openSidebarMenu" class="sidebarIconToggle">
    <div class="spinner diagonal part-1"></div>
    <div class="spinner horizontal"></div>
    <div class="spinner diagonal part-2"></div>
  </label>
  <div id="sidebarMenu">
        <ul class="sidebarMenuInner">

          {!loggedIn && <li><a href="/login">Login</a></li>}
          
          {!loggedIn && <li><a href="/login">Login</a></li>}   
          {loggedIn && <li>{user_name}</li>}

      <li><a href="/coins">Coins</a></li>
      <li><a href="/compare">Compare</a></li>
      <li><a href="/learn">Learn</a></li>
      <li><a href="/portfolio">Portfolio</a></li>
          
      {loggedIn && <li><a href="/logout">Logout</a></li>}
          
    </ul>
  </div>
  </>
  );
}

export default Navbar;
