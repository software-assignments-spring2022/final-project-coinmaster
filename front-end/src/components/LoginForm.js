import '../css/LoginForm.css';
import { Outlet, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import SubmitBtn from './SubmitBtn.js';

const LoginForm = props => {
    return (
        <Form className="login-form">
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Enter your username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <SubmitBtn text="Login"/>
        </Form>
    )
}
export default LoginForm;