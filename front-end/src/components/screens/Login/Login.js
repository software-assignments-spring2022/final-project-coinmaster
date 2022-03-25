import './Login.css';
import { Link } from "react-router-dom";
import Navbar from '../../Navbar.js';
import LoginForm from "../../LoginForm.js"

const Login = props => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <div>
                    <h1 className="header">Welcome to Coin Master!</h1>
                </div>
                <LoginForm/>
                <div className="footnote">
                    Don't Have an Account?
                    <Link to="/Register">
                        <a href="url" className="link-register">Register</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Login