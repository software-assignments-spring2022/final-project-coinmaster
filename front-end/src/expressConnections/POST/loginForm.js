import '../../css/LoginForm.css';
import React, { useState } from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const initialFormData = Object.freeze({
    user_name: "",
    password: "",
    loginState: new Boolean(false),
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

    const handleLogout = () => {
        console.log("User is logged out.")
      };

    const handleSubmit = (e) => {
            e.preventDefault();
            formData.loginState = true
            console.log(formData);
            const response = axios.post(
                `${process.env.REACT_APP_SERVER_HOSTNAME}/login`,
                formData
            )
            .then(response => {
               if(response.data.success == true){
                    document.querySelectorAll(".warning").forEach(curr => {
                        curr.classList.add("hidden")
                    })
                   
                   localStorage.setItem('user', response.data.user)
                   console.log(response.data)

                    //window.location.href = '/portfolio'
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
                    }else if(error == "password is required"){
                        document.querySelectorAll(".warning").forEach(curr => {
                            curr.classList.add("hidden")
                          })
                        document.querySelector("#empty-password-warning").classList.remove("hidden")
                    }else if(error == "username does not exist"){
                        document.querySelectorAll(".warning").forEach(curr => {
                            curr.classList.add("hidden")
                          })
                        document.querySelector("#invalid-username-warning").classList.remove("hidden")
                    }else if(error == "incorrect password"){
                        document.querySelectorAll(".warning").forEach(curr => {
                            curr.classList.add("hidden")
                          })
                        document.querySelector("#invalid-password-warning").classList.remove("hidden")
                    }
                }
              });
    };

    if (formData.loginState==true) {
        return (
          <div>
            loggged in
            <button onClick={handleLogout}>logout</button>
          </div>
        );
      }
    return (
        <Form className="login-form">
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control name="user_name" placeholder="Enter your username" onChange={handleChange}/>
                <div id="empty-username-warning" className="warning hidden">You must enter a username</div>
                <div id="invalid-username-warning" className="warning hidden">Username does not exist</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control  name="password" type="password" placeholder="Enter your password" onChange={handleChange}/>
                <div id="empty-password-warning" className="warning hidden">You must enter a password</div>
                <div id="invalid-password-warning" className="warning hidden">incorrect password</div>
            </Form.Group>
            <Button variant="dark" type="submit" onClick={handleSubmit}>
                Login
            </Button>
        </Form>
    )
}
export default LoginForm;