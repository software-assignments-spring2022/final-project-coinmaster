import './Login.css';
import Navbar from "../../Navbar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = props => {
    return (
        <>
            <Navbar/>
        <div className="container">
            <div>
                <h1 className="header">Welcome to Coin Master!</h1>
            </div>
            <div className="form-container">
                <Form className="login-form">
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder="Enter your username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div className="footnote">
                Don't Have an Account?
                {/* TODO: Here is the link to Register page */}
                {/* <Link to="/Register" className="link-register">Register</Link> */}
                <a href="url" className="link-register">Register</a>
            </div>
        </div>
        </>
    )
}
export default Login