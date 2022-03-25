import './Register.css';
import { Outlet, Link } from "react-router-dom";
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
                    {/* TODO: Here is the link to Login page */}
                    {/* <Link to="/Login" className="link-sign-up">Login</Link> */}
                    <a href="url" className="link-login">Login</a>
                </div>
            </div>
        </>
    )
}
export default Register