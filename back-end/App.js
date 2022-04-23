require('dotenv').config({ silent: true }) // load environmental variables from a hidden file named .env
const express = require('express') // CommonJS import style!
const morgan = require('morgan') // middleware for nice logging of incoming HTTP requests
const cors = require('cors') // middleware for enabling CORS (Cross-Origin Resource Sharing) requests.
const bodyParser = require("body-parser"); // parsing posted json body
const mongoose = require('mongoose')
bcrypt = require('bcrypt'),
SALT_WORK_FACTOR = 10;

//Using Coinlib API, setting API key 
//const Coinlib = require('coinlib-api');
const { default: axios } = require('axios');
//const CoinlibClient = new Coinlib("c547247f9214255e");
//CoinlibClient.setKey("c547247f9214255e");

const app = express() // instantiate an Express object
app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' })) // log all incoming requests, except when in unit test mode.  morgan has a few logging default styles - dev is a nice concise color-coded style
app.use(cors()) // allow cross-origin resource sharing

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// connect to database
mongoose
  .connect(`${process.env.DB_CONNECTION_STRING}`)
  .then(data => console.log(`Connected to MongoDB`))
  .catch(err => console.error(`Failed to connect to MongoDB: ${err}`))

// load the dataabase models we want to deal with
const { Portfolio } = require('./database/Portfolio')
const { User } = require('./database/users')

//express validator
const { check, validationResult } = require('express-validator');

// USE THIS TO FIND FROM DATABSE - PUT IN CURLY BRASES IF YOU WANT TO FIND A SPECIFIC THING
// THESE MUST BE IN A ASYNC FUNCTION
app.get('/getFromDatabaseExample', async (req, res) => {
  // load all messages from database
  try {
    const coins = await Portfolio.find({})      // depending on which you need
    const users = await User.find({})           // depending on which you need
    res.json({

      // USING WHAT YOU WANT TO SEND BACK AS JSON FROM DATABASE (ex. change messages to coins / users)
      messages: messages,
      message: 'all good',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      message: 'failed to retrieve messages from the database',
    })
  }
})

app.post('/getFromDatabaseExample/save', async (req, res) => {
  // try to save the message to the database
  try {

    // USING WHAT YOU WANT TO ADD BACK AS JSON FROM DATABASE (ex. change messages to coins / users) (Pick what you need to Create)
    // SHOULD BE SAME AS SCHEMA THAT YOU CREATE
    // const User = await User.create({
    const coins = await Portfolio.create({
      name: req.body.name,
      message: req.body.message,
    })
    return res.json({
      message: message, // return the message we just saved
      message: 'all good',
    })
  } catch (err) {
    console.error(err)
    return res.status(400).json({
      error: err,
      message: 'failed to save the message to the database',
    })
  }
})


app.get('/messages', async (req, res) => {
  try {
      

      const messages = "this is from express - messages!"
      res.json({
        success: true,
        yourCoins: yourCoins,
        message: 'all good',
      })
    } catch (err) {
      console.error(err)
      res.status(400).json({
        error: err,
        message: 'failed to work',
      })
    }
})

//REQUESTS FOR PORTFOLIO PAGE
app.get('/portfolio', async (req, res) => {
  try {


    console.log(currentUser);

    const messages = "this is from express - portfolio! (Demonstartion of Back-End Connection - Awaiting Database)"

    const response = await Portfolio.find({})      // depending on which you need

    console.log(response);

    const allCoins = [];

    response.forEach(coin => {

      const coinObj = {
        symbol: coin.symbol,
        buyPrice: coin.buyPrice,
        quantity: coin.quantity,
      }
     
      allCoins.push(coinObj);

    })

    console.log(allCoins)

    res.json(allCoins)
    
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      message: 'failed to work',
    })
  }
})



/* const apiFunction = async () => {
  await axios
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

    const toReturn = {
      allCoins: allCoins,
      coinNames: coinNames
    }

    return (allCoins);
  }) 
  .catch(function (err){
    console.log("axios error");
  })
} */

const cryptoData = [
  { symbol: "WAITING", name: "Ethereum", rank: 2, price: "0.078420138035523", market_cap: "7847729.8474137"},
  { symbol: "WAITING", name: "Bitcoin", rank: 1, price: "0.003513413523", market_cap: "337729.8474137"},
];

//REQUESTS FOR BUY PAGE
let buyData = {
  crypto: "Please Enter a Crypto",
  quantity: "Please Enter a Quantity",
  cryptoData: cryptoData
};

app.get('/buy', async (req, res) => {
  try {
    await axios
    //.get("https://coinlib.io/api/v1/coin?key=c547247f9214255e&pref=USD&symbol=BTC,ETH,USDT,BNB,USDC,SOL,XRP,ADA,LUNA,AVAX")
    .get("https://coinlib.io/api/v1/coin?key=1ba60195f39ff3a1&pref=USD&symbol=BTC,ETH,USDT,BNB,USDC,SOL,XRP,ADA,LUNA,AVAX")
    .then(function (response){
  
      const allCoins = [];
      const coinNames = [];
  
      response.data.coins.forEach(coin=>{
        const coinObj = {
          symbol: coin.symbol,
          name: coin.name,
          price: coin.price,
          rank: coin.rank,
          market_cap: coin.market_cap
        }
       
        allCoins.push(coinObj);
        coinNames.push(coinObj.name+", "+coinObj.symbol);
        
      })
  
      //console.log(coinNames);
      console.log(allCoins);
 /*     const messages = allCoins;
  
       const toReturn = {
        allCoins: allCoins,
        coinNames: coinNames
      } */

      const messages = buyData;
      res.json({
        success: true,
        crypto: messages.crypto,
        quantity: messages.quantity,
        cryptoData: allCoins,
        message: 'all good',
      })
  
  /*     return (allCoins); */
    }) 
    .catch(function (err){
      console.log("axios error");
    })

  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      message: 'failed to work',
    })
  }
})

app.post('/buy', async (req, res) => {
  try{
    console.log(req)
    console.log(req.body)
    buyData.crypto = req.body.crypto;
    buyData.quantity = req.body.quantity;
    if(buyData.crypto == '' || buyData.quantity == ''){
      throw new Error("At least one field is empty");
    }else{
      return res.json({success: true, message: "buy data post success"});
    }
  }catch(err){
      console.error(err)
      return res.status(400).json({
          error: err,
          message: err.message,
      })
  }
})


//REQUESTS FOR SELL PAGE
let sellData = {
  crypto: "Please Enter a Crypto",
  quantity: "Please Enter a Quantity",
  cryptoData: cryptoData
};

app.get('/sell', async (req, res) => {          // JINU JINJU JINJU PLEASE DONT CHNAGE THIS RN
  try {

    await axios
    //.get("https://coinlib.io/api/v1/coin?key=c547247f9214255e&pref=USD&symbol=BTC,ETH,USDT,BNB,USDC,SOL,XRP,ADA,LUNA,AVAX")
    .get("https://coinlib.io/api/v1/coin?key=1ba60195f39ff3a1&pref=USD&symbol=BTC,ETH,USDT,BNB,USDC,SOL,XRP,ADA,LUNA,AVAX")
    .then(function (response){
  
      const allCoins = [];
      const coinNames = [];
  
      response.data.coins.forEach(coin=>{
        const coinObj = {
          symbol: coin.symbol,
          name: coin.name,
          price: coin.price,
          rank: coin.rank,
          market_cap: coin.market_cap
        }
       
        allCoins.push(coinObj);
        coinNames.push(coinObj.name+", "+coinObj.symbol);
        
      })
  
      //console.log(coinNames);
      console.log(allCoins);
 /*     const messages = allCoins;
  
       const toReturn = {
        allCoins: allCoins,
        coinNames: coinNames
      } */

      const messages = sellData;
      res.json({
        success: true,
        crypto: messages.crypto,
        quantity: messages.quantity,
        cryptoData: allCoins,
        message: 'all good',
      })
  
  /*     return (allCoins); */
    }) 
    .catch(function (err){
      console.log("axios error");
    })

  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      message: err.message,
    })
  }
})


app.post('/sell', async (req, res) => {
  try{
    console.log(req)
    console.log(req.body)
    sellData.crypto = req.body.crypto;
    sellData.quantity = req.body.quantity;
    if(sellData.crypto == '' || sellData.quantity == ''){
      throw new Error("At least one field is empty");
    }else{
      return res.json({success: true, message: "sell data post success"});
    }
  }catch(err){
      console.error(err)
      return res.status(400).json({
          error: err,
          message: err.message,
      })
  }
})


// TESTING

// a route to handle logging out users
app.get('/coinTable', async (req, res) => {
  // load all messages from database
  try {
    const messages = sellData;
    res.json({
      success: true,
      crypto: messages.crypto,
      quantity: messages.quantity,
      message: 'all good',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      message: 'failed to work',
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


//REQUESTS FOR COMPARE PAGE
 app.get('/compare', async (req, res) => {
  try {

     axios
    .get("https://coinlib.io/api/v1/coin?key=9810ec37c3769c55&pref=USD&symbol=BTC,ETH,USDT,BNB,USDC,SOL,XRP,ADA,LUNA,AVAX")
    .then(function (response){

    
     const allCoins = [];
      const coinNames = [];
      response.data.coins.forEach(coin=>{

        const coinObj = {
          symbol: coin.symbol,
          name: coin.name,
          price: coin.price,
          rank: coin.rank,
          market_cap: coin.market_cap
        }
       
        allCoins.push(coinObj);
        coinNames.push(coinObj.name);
        
      })

      console.log(coinNames);
      const messages = allCoins;
      res.json({
        messages: messages,
        names: coinNames,
      }) 
    }) 
    
    .catch(function (err){
      console.log("axios error or api request limit reached ");
    })

  } catch (err) {
    console.log("Error");
    res.status(400).json({
      error: err,
      message: 'failed to work',
    })
  } 
}) 

//REQUESTS FOR REGISTER PAGE
 app.get("/", (req, res) => {
    res.send("Home")
 })

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors())

app.post(
          '/register',
          check('user_name', 'username is required').notEmpty(),
          check('your_name', 'your name is required').notEmpty(),
          check('password', 'password is required').notEmpty(),
          check('confirm_password', 'must enter password again').notEmpty(),
          check('email', 'email is required').notEmpty(),
          check('password', 'password must be at least 8 characters').isLength({ min: 8 }),
          check('password').custom((value,{req}) => {
            if (value !== req.body.confirm_password) {
                throw new Error("passwords must match");
            } else {
                return value;
            }
          }),
          check("email", "email must be valid").isEmail(),
          async (req, res) => {
            try{
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                  throw new Error(errors.array()[0].msg);
                }
                console.log(req.body)
                const user_name = req.body.user_name
                const your_name = req.body.your_name
                var password = req.body.password
                const email = req.body.email
                // try to save the message to the database
                var coins = [];
                var stats = {
                  net_profit: 0,
                  all_time_high: 0,
                  fifty_two_week_high: 0,
                  account_age: 0,
                }
                const users = await User.find({user_name: user_name})
                if(users.length != 0){
                  throw new Error("duplicate username");
                }else{
                  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
                  const hashed_password = await bcrypt.hash(password,salt);
                  const user = await User.create({
                    user_name: user_name,
                    your_name: your_name,
                    password: hashed_password,
                    email: email,
                    coins: coins,
                    stats: stats,
                  })
                  return res.json({success: true, message: "register info successfully saved to database"});
                }
            }catch(err){
                console.error(err)
                return res.status(400).json({
                    error: err,
                    message: err.message,
                })
            }
          }     
)
        
let currentUser = "logged-out";

//REQUESTS FOR LOGIN PAGE
app.post(
          "/login",
          check('user_name', 'username is required').notEmpty(),
          check('password', 'password is required').notEmpty(),
          async (req, res) => {
            try{
              const errors = validationResult(req);
              if (!errors.isEmpty()) {
                throw new Error(errors.array()[0].msg);
              }
                console.log(req)
                console.log(req.body)
                const user_name = req.body.user_name
                const password = req.body.password
                //compare with database
                const users = await User.find({user_name: user_name})
                if(users.length != 0){
                  const result = await bcrypt.compare(password, users[0].password)
                  if (result) {
                    currentUser = user_name;
                    return res.json({success: true, message: "login success"});
                  }else{
                    throw new Error("incorrect password");
                  }
                }else{
                  throw new Error("username does not exist");
                }
            }catch(err){
                console.error(err)
                return res.status(400).json({
                    error: err,
                    message: err.message,
                })
            }
          }
        )

module.exports = app // CommonJS export style! 