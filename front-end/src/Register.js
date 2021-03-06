import "./components/screens/Register/Register.css";
import { Link } from "react-router-dom";
import RegisterForm from "./components/RegisterForm.js"

const Register = props => {
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
                <RegisterForm/>
                <div className="footnote">
                    Already Have an Account?
                    <Link to="/login">
                        <a href="url" className="link-login">Login</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Register