require('dotenv').config({ silent: true }) // load environmental variables from a hidden file named .env
const express = require('express') // CommonJS import style!
const morgan = require('morgan') // middleware for nice logging of incoming HTTP requests
const cors = require('cors') // middleware for enabling CORS (Cross-Origin Resource Sharing) requests.
/* const mongoose = require('mongoose') */

//Using Coinlib API, setting API key 
const Coinlib = require('coinlib-api');
const { default: axios } = require('axios');
const CoinlibClient = new Coinlib("c547247f9214255e");
CoinlibClient.setKey("c547247f9214255e");

const app = express() // instantiate an Express object
app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' })) // log all incoming requests, except when in unit test mode.  morgan has a few logging default styles - dev is a nice concise color-coded style
app.use(cors()) // allow cross-origin resource sharing

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// connect to database
/* mongoose
  .connect(`${process.env.DB_CONNECTION_STRING}`)
  .then(data => console.log(`Connected to MongoDB`))
  .catch(err => console.error(`Failed to connect to MongoDB: ${err}`)) */

// load the dataabase models we want to deal with
/* const { Message } = require('./models/Message')
const { User } = require('./models/User') */

app.get('/messages', async (req, res) => {
    // load all messages from database
    try {
      const messages = "this is from express!"
      res.json({
        messages: messages,
        body: 'all good',
      })
      /* let data = await  CoinlibClient.coins.fetchInfo('BTC', {
        pref: 'USD'
      });

      console.log(data); */

      axios

      .get("https://coinlib.io/api/v1/coin?key=c547247f9214255e&pref=USD&symbol=BTC")
      .then(function (response){

        const coinObj = {
          symbol: response.data.symbol,
          name: response.data.name,
          price: response.data.price,
          rank: response.data.rank,
          marketCap: response.data.market_cap
        }
        console.log(coinObj);
      })

      

    } catch (err) {
      console.error(err)
      res.status(400).json({
        error: err,
        status: 'failed to work',
      })
    }
  })

/* // a route to handle logging out users
app.get('/messages', async (req, res) => {
  // load all messages from database
  try {
    const messages = await Message.find({})
    res.json({
      messages: messages,
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      status: 'failed to retrieve messages from the database',
    })
  }
})

// a route to handle logging out users
app.post('/messages/save', async (req, res) => {
  // try to save the message to the database
  try {
    const message = await Message.create({
      name: req.body.name,
      message: req.body.message,
    })
    return res.json({
      message: message, // return the message we just saved
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    return res.status(400).json({
      error: err,
      status: 'failed to save the message to the database',
    })
  }
}) */

// export the express app we created to make it available to other modules
module.exports = app // CommonJS export style!
















// OLD CODE

/* // import and instantiate express
const express = require("express"); // CommonJS import style!
const bodyParser = require("body-parser");
const router = express.Router();
const app = express(); // instantiate an Express object
const path = require('path');
// we will put some server logic here later...
// export the express app we created to make it available to other modules
const axios = require('axios');
// const morgan = require('morgan');
// const multer = require('multer');

const users=[];
current_user = null
next_id = 0;
 app.get("/", (req, res) => {
    res.send("Home")
 })

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors())
// app.use("/", router)
// app.get("/coins", (req, res) => {
//     res.send("Coin")
// })

// app.get("/compare", (req, res) => {
//     res.send("Compare")
// })

// app.get("/login", (req, res) => {
//     res.send("Login")
// })

// app.get("/register", (req, res) => {
//     res.send("Register")
// })

// app.get("/portfolio", (req, res) => {
//     res.send("Portfolio")
// })

// app.get("/learn", (req, res) => {
//     res.send("Learn")
// })

app.post('/register', (req, res) => {
    console.log(req)
    console.log(req.body)
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
    console.log(req)
    console.log(req.body)
    const user_name = req.body.user_name
    const password = req.body.password
    if(user_name == '' || password == ''){
        return res.status(400).json({success: false, message: "At least one field is empty"});
    }else{
        //compare with database
        return res.json({success: true, message: "login success"});
    }
})


module.exports = app */