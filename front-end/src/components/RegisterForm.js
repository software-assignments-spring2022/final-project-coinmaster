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

const RegisterForm = props => {
    const [formData, updateFormData] = React.useState(initialFormData);

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
            )
            .then(response => {
                if(response.data.success == true){
                    document.querySelectorAll(".warning").forEach(curr => {
                        curr.classList.add("hidden")
                    })
                    window.location.href = '/portfolio'
                } 
             })
            .catch(function (err) {
                if (err.response) {
                    const error = err.response.data.message
                    console.log(error)
                    if(error == "username is required"){
                        document.querySelectorAll(".warning").forEach(curr => {
                            curr.classList.add("hidden")
                          })
                        document.querySelector("#empty-username-warning").classList.remove("hidden")
                    }else if(error == "your name is required"){
                        document.querySelectorAll(".warning").forEach(curr => {
                            curr.classList.add("hidden")
                          })
                        document.querySelector("#empty-your-name-warning").classList.remove("hidden")
                    }else if(error == "password is required"){
                        document.querySelectorAll(".warning").forEach(curr => {
                            curr.classList.add("hidden")
                          })
                        document.querySelector("#empty-password-warning").classList.remove("hidden")
                    }else if(error == "must enter password again"){
                        document.querySelectorAll(".warning").forEach(curr => {
                            curr.classList.add("hidden")
                          })
                        document.querySelector("#empty-confirm-password-warning").classList.remove("hidden")
                    }else if(error == "email is required"){
                        document.querySelectorAll(".warning").forEach(curr => {
                            curr.classList.add("hidden")
                          })
                        document.querySelector("#empty-email-warning").classList.remove("hidden")
                    }else if(error == "password must be at least 8 characters"){
                        document.querySelectorAll(".warning").forEach(curr => {
                            curr.classList.add("hidden")
                          })
                        document.querySelector("#short-password-warning").classList.remove("hidden")
                    }else if(error == "passwords must match"){
                        document.querySelectorAll(".warning").forEach(curr => {
                            curr.classList.add("hidden")
                          })
                        document.querySelector("#unmatched-confirm-password-warning").classList.remove("hidden")
                    }else if(error == "email must be valid"){
                        document.querySelectorAll(".warning").forEach(curr => {
                            curr.classList.add("hidden")
                          })
                        document.querySelector("#invalid-email-warning").classList.remove("hidden")
                    }else if(error == "duplicate username"){
                        document.querySelectorAll(".warning").forEach(curr => {
                            curr.classList.add("hidden")
                          })
                        document.querySelector("#duplicate-username-warning").classList.remove("hidden")
                    }
                }
            });
    };
    return (
        <Form className="register-form">
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control name="user_name" placeholder="Enter your name" onChange={handleChange}/>
                <div id="empty-username-warning" className="warning hidden">You must enter a username</div>
                <div id="duplicate-username-warning" className="warning hidden">Your username is already taken</div>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="your_name" placeholder="Enter your username" onChange={handleChange}/>
                <div id="empty-your-name-warning" className="warning hidden">You must enter your name</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter your password" onChange={handleChange}/>
                <div id="empty-password-warning" className="warning hidden">You must enter a password</div>
                <div id="short-password-warning" className="warning hidden">Your password must be at least 8 characters</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="confirm_password" placeholder="Enter your password again" onChange={handleChange}/>
                <div id="empty-confirm-password-warning" className="warning hidden">You must re-enter your password</div>
                <div id="unmatched-confirm-password-warning" className="warning hidden">Your passwords must match</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" onChange={handleChange}/>
                <div id="empty-email-warning" className="warning hidden">You must enter an email</div>
                <div id="invalid-email-warning" className="warning hidden">You must enter a valid email (e.g. example@exapmle.com)</div>
            </Form.Group>
            <Button variant="dark" type="submit" onClick={handleSubmit}>
                Register
            </Button>
        </Form>
    )
}

export default RegisterForm