import '../css/LoginForm.css';
import React, { useState } from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const initialFormData = Object.freeze({
    user_name: "",
    password: "",
});
const LoginForm = props => {
    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
        });
        console.log(formData);
    };

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            console.log(formData);
            const response = await axios.post(
                'http://localhost:3000/login',
                formData
            )
        }catch (err){
            console.log(err);
        }
    };
    return (
        <Form className="login-form">
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control name="user_name" placeholder="Enter your username" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control  name="password" type="password" placeholder="Enter your password" onChange={handleChange}/>
            </Form.Group>
            <Button variant="dark" type="submit" onClick={handleSubmit}>
                Login
            </Button>
        </Form>
    )
}
export default LoginForm;