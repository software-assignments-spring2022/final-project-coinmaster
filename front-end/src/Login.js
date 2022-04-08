import "./components/screens/Login/Login.css";
import { Link } from "react-router-dom";
import LoginForm from "./components/LoginForm.js"

const Login = props => {
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="container">
                <div>
                    <h1>Welcome to Coin Master!</h1>
                </div>
                <LoginForm/>
                <div className="footnote">
                    Don't Have an Account?
                    <Link to="/register">
                        <a href="url" className="link-register">Register</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Login