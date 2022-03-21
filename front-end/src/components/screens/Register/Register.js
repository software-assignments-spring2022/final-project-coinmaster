import './Register.css';
import { Outlet, Link } from "react-router-dom";
import Navbar from "../../Navbar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import Navbar from '../Navbar'

const Register = props => {
    return (
        <>
            <Navbar/>
        <div className='container'>
            <div>
                <h1 className="header">Welcome to Coin Master!</h1>
            </div>
            <div className="form-container">
                <Form className="register-form">
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder="Enter your username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password again" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div className="footnote">
                Already Have an Account?
                {/* TODO: Here is the link to Login page */}
                <Link to="/" className="link-sign-up">Login</Link>
                {/* <a href="url" className="link-login">Login</a> */}
            </div>
        </div>
        </>
    )
}
export default Register