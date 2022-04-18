import '../css/RegisterForm.css';
import React, { useState, useEffect} from 'react';
import axios from "axios"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const initialFormData = {
    user_name: "",
    your_name: "",
    password: "",
    confirm_password: "",
    email: "",
};

var initialErrorMessage;
const RegisterForm = props => {
    const [formData, updateFormData] = React.useState(initialFormData);
    const [errorMessage] = React.useState(initialErrorMessage);

    const handleChange = (e) => {
        updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
        });
        console.log(formData);
    };
    const handleSubmit = (e) => {
            e.preventDefault();
            console.log(formData);
            const response = axios.post(
                `${process.env.REACT_APP_SERVER_HOSTNAME}/register`,
                formData
            ).catch(function (err) {
                if (err.response) {
                  console.log(err.response.data.message);
                }
              });
    };
    return (
        <Form className="register-form">
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control name="user_name" placeholder="Enter your name" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="your_name" placeholder="Enter your username" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter your password" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="confirm_password" placeholder="Enter your password again" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" onChange={handleChange}/>
            </Form.Group>
            <Button variant="dark" type="submit" onClick={handleSubmit}>
                Register
            </Button>
        </Form>
    )
}

export default RegisterForm