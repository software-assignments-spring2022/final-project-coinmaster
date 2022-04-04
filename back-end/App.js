// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const path = require('path');
// we will put some server logic here later...
// export the express app we created to make it available to other modules
const axios = require('axios');
const morgan = require('morgan');
const multer = require('multer');
const users=[];
current_user = null
next_id = 0;


app.post("/register", (req, res) => {
    const user_name = req.body.user_name
    const your_name = req.body.your_name
    const password = req.body.password
    const confirm_password = req.body.confirm_password
    const email = req.body.email
    if(user_name == '' || your_name == '' || password == '' || confirm_password == '' || email == ''){
        return res.status(400).json({success: false, message: "At least one field is empty"});
    }else if(password != confirm_password){
        return res.status(400).json({success: false, message: "passwords do not match"});
    }else{
        const user = {
            user_id: next_id,
            user_name: user_name,
            your_name: your_name,
            password: password,
            email: email,
        }
        users.push(user)
        current_user = user.user_id
        next_id++
        return res.json({success: true, message: "register success"});
    }
})

app.post("/login", (req, res) => {
    const user_name = req.body.user_name
    const password = req.body.password
    if(user_name == '' || password == ''){
        return res.status(400).json({success: false, message: "At least one field is empty"});
    }else if(password != confirm_password){
        return res.status(400).json({success: false, message: "passwords do not match"});
    }else{
        //compare with database
        return res.json({success: true, message: "register success"});
    }
})


module.exports = app