import './Login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import Navbar from '../Navbar'

const Login = props => {
    return (
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
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div className="footnote">
                Don't Have an Account?
                <Button className="btn-sign-up" variant="light">
                    Sign up
                </Button>
            </div>
        </div>
    )
}
export default Login