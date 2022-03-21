import homeIcon from "../media/home-icon.png"
import logo from "../media/logo.png"
import "../css/Navbar.css"

function Navbar(props) {
    return (
        
        <div class="nav-container">
            <nav class="navbar  navbar-dark bg-primary" >
                <img src={homeIcon} class="navbar-brand nav-icon" href="Home"/>
                <h1 class="navbar-brand">Coin Master</h1>
                <img src={logo} class="navbar-brand nav-icon" href="Home"/>
            </nav>
        </div>
    )
  }

export default Navbar