import homeIcon from "../media/home-icon.png";
import logo from "../media/logo.png";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div class="nav-container">
      <nav class="navbar  navbar-dark bg-primary">
        <Link to="/">
          <img src={homeIcon} class="navbar-brand nav-icon" href="Home" />
        </Link>
        <h1 class="navbar-brand display-1">Coin Master</h1>
        <img src={logo} class="navbar-brand nav-icon" href="Home" />
      </nav>
    </div>
  );
}

export default Navbar;
