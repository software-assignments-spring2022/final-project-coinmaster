import '../css/RegisterForm.css';
import { Outlet, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import SubmitBtn from './SubmitBtn.js';

const RegisterForm = props => {
    return (
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
            <SubmitBtn text="Register"/>
        </Form>
    )
}

export default RegisterForm