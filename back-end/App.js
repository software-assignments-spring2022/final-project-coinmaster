require('dotenv').config({ silent: true }) // load environmental variables from a hidden file named .env
const express = require('express') // CommonJS import style!
const morgan = require('morgan') // middleware for nice logging of incoming HTTP requests
const cors = require('cors') // middleware for enabling CORS (Cross-Origin Resource Sharing) requests.
const bodyParser = require("body-parser"); // parsing posted json body
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
    try {
      const messages = "this is from express - messages!"
      res.json({
        messages: messages,
        body: 'all good',
      })
    } catch (err) {
      console.error(err)
      res.status(400).json({
        error: err,
        status: 'failed to work',
      })
    }
})

//REQUESTS FOR PORTFOLIO PAGE
app.get('/portfolio', async (req, res) => {
  try {
    const messages = "this is from express - portfolio!"
    res.json({
      messages: messages,
      body: 'all good',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      status: 'failed to work',
    })
  }
})

const cryptoData = [
  { symbol: "ETH", name: "Ethereum", rank: 2, price: "0.078420138035523", market_cap: "7847729.8474137"},
  { symbol: "BIT", name: "Bitcoin", rank: 1, price: "0.003513413523", market_cap: "337729.8474137"},
];


//REQUESTS FOR BUY PAGE
let buyData = {
  crypto: "Please Enter a Crypto",
  quantity: "Please Enter a Quantity",
  cryptoData: cryptoData
};

app.get('/buy', async (req, res) => {
  try {
    const messages = buyData;
    res.json({
      crypto: messages.crypto,
      quantity: messages.quantity,
      cryptoData: 1,
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      status: 'failed to work',
    })
  }
})

app.post('/buy', async (req, res) => {

  console.log(req.body);

  buyData.crypto = req.body.crypto;
  buyData.quantity = req.body.quantity;
})


//REQUESTS FOR SELL PAGE
let sellData = {
  crypto: "Please Enter a Crypto",
  quantity: "Please Enter a Quantity"
};

app.get('/sell', async (req, res) => {
  try {
    const messages = sellData;
    res.json({
      crypto: messages.crypto,
      quantity: messages.quantity,
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      status: 'failed to work',
    })
  }
})


app.post('/sell', async (req, res) => {

  console.log(req.body);

  sellData.crypto = req.body.crypto;
  sellData.quantity = req.body.quantity;
})


// TESTING

// a route to handle logging out users
app.get('/coinTable', async (req, res) => {
  // load all messages from database
  try {
    const messages = sellData;
    res.json({
      crypto: messages.crypto,
      quantity: messages.quantity,
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      status: 'failed to work',
    })
  }
})

// a route to handle logging out users
app.post('/coinTable', async (req, res) => {
  // try to save the message to the database

  console.log(req.body);

  sellData.crypto = req.body.crypto;
  sellData.quantity = req.body.quantity;
})






/* a route to handle logging out users
app.get('/messages', async (req, res) => {
  // load all messages from database
//REQUESTS FOR COMPARE PAGE
 app.get('/compare', async (req, res) => {
  try {

     axios
    .get("https://coinlib.io/api/v1/coin?key=c547247f9214255e&pref=USD&symbol=BTC,ETH,USDT,BNB,USDC,SOL,XRP,ADA,LUNA,AVAX")
    .then(function (response){

    
     const allCoins = [];
      const coinNames = [];
      response.data.coins.forEach(coin=>{

        const coinObj = {
          symbol: coin.symbol,
          name: coin.name,
          price: coin.price,
          rank: coin.rank,
          marketCap: coin.market_cap
        }
       
        allCoins.push(coinObj);
        coinNames.push(coinObj.name+", "+coinObj.symbol);
        
      })

      console.log(coinNames);
      const messages = allCoins;
      res.json({
        messages: messages,
        names: coinNames,
      }) 
    }) 
    
    .catch(function (err){
      console.log("axios error");
    })

  } catch (err) {
    console.log("Error");
    res.status(400).json({
      error: err,
      status: 'failed to work',
    })
  } 
}) 

//REQUESTS FOR REGISTER PAGE
const users=[];
current_user = null
next_id = 0;
 app.get("/", (req, res) => {
    res.send("Home")
 })

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors())

app.post('/register', (req, res) => {
    try{
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
    }catch(err){
        console.error(err)
        return res.status(400).json({
            error: err,
            status: 'failed to register',
        })
    }
})

//REQUESTS FOR LOGIN PAGE
app.post("/login", (req, res) => {
    try{
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
    }catch(err){
        console.error(err)
        return res.status(400).json({
            error: err,
            status: 'failed to login',
        })
    }
})
*/

module.exports = app // CommonJS export style! 