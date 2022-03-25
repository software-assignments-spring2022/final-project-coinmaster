import './Register.css';
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import RegisterForm from "../../RegisterForm.js"

const Register = props => {
    return (
        <>
            <Navbar/>
            <div className='container'>
                <div>
                    <h1 className="header">Welcome to Coin Master!</h1>
                </div>
                <RegisterForm/>
                <div className="footnote">
                    Already Have an Account?
                    <Link to="/compare">
                        <a href="url" className="link-login">Login</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Register