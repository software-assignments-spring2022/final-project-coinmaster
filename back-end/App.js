require('dotenv').config({ silent: true }) // load environmental variables from a hidden file named .env
const express = require('express') // CommonJS import style!
const morgan = require('morgan') // middleware for nice logging of incoming HTTP requests
const cors = require('cors') // middleware for enabling CORS (Cross-Origin Resource Sharing) requests.
const bodyParser = require("body-parser"); // parsing posted json body
const mongoose = require('mongoose')
bcrypt = require('bcrypt'),
SALT_WORK_FACTOR = 10;
let currentUser = "logged-out";

const { default: axios } = require('axios');

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
// const { Portfolio } = require('./database/Portfolio')
const { User } = require('./database/users')

//express validator
const { check, validationResult } = require('express-validator');



/* app.get('/messages', async (req, res) => {
  try {

      const messages = "this is from express - messages!"
      res.json({
        success: true,
        yourCoins: yourCoins,
        message: 'all good',
      })
    } catch (err) {1` 
      console.error(err)
      res.status(400).json({
        error: err,
        message: 'failed to work',
      })
    }
})
 */
//REQUESTS FOR PORTFOLIO PAGE
app.get('/portfolio', async (req, res) => {
  try {

    userName = req.body.user;
    //console.log(currentUser);

    //const messages = "this is from express - portfolio! (Demonstartion of Back-End Connection - Awaiting Database)"

    //if there is a user logged in, then show their coin portfolio 
    if(userName==null){
      const user = await User.findOne({user_name: userName}).exec();
      const response = user.coins;
    
    console.log(response);

    const allCoins = [];
    response.forEach(coin => {
      const coinObj = {
        symbol: coin.symbol,
        buyPrice: 100,
        quantity: coin.quantity,
      }
     
      allCoins.push(coinObj);
    })

    console.log(allCoins)
    res.json(allCoins)
  }
    
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      message: 'failed to work',
    })
  }
})


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
    //console.log(currentUser);
    await axios
    .get("https://coinlib.io/api/v1/coin?key=c547247f9214255e&pref=USD&symbol=BTC,ETH,USDT,BNB,USDC,SOL,XRP,ADA,LUNA,AVAX")
    // .get("https://coinlib.io/api/v1/coin?key=1ba60195f39ff3a1&pref=USD&symbol=BTC,ETH,USDT,BNB,USDC,SOL,XRP,ADA,LUNA,AVAX")
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
  
      console.log(allCoins);

      const messages = buyData;
      res.json({
        success: true,
        crypto: messages.crypto,
        quantity: messages.quantity,
        cryptoData: allCoins,
        message: 'all good',
      })
  
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

    const coins = ["BTC","ETH","USDT","BNB","USDC","SOL","XRP","ADA","LUNA","AVAX"];
    buyData.crypto = req.body.crypto;
    buyData.quantity = req.body.quantity;
    userName = req.body.user;
    if(buyData.crypto == '' || buyData.quantity == ''){
      throw new Error("At least one field is empty");
    }else{
      const user = {user_name: userName}
      const newCoin= {symbol:buyData.crypto, quantity: buyData.quantity}
      console.log(user);
      console.log(newCoin)
      //check if user input is a valid coin 
      let validCoin = false;
      coins.forEach(c=>{
        if(newCoin.symbol===c){
          validCoin = true;
        }
      });

      if(validCoin===true){
        //find the user in database and update their coin array to include new purchase 
        console.log(newCoin)
        await User.findOneAndUpdate(user, {$push: {coins:newCoin}}, {new:true})
        return res.json({success: true, message: `Congratulations, you purchased ${newCoin.quantity} units of ${newCoin.symbol}`});
      }
      else{
        return res.json({success: false, message: "That is not a valid coin"});
      }
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

app.get('/sell', async (req, res) => {        
  try {

    await axios
    .get("https://coinlib.io/api/v1/coin?key=c547247f9214255e&pref=USD&symbol=BTC,ETH,USDT,BNB,USDC,SOL,XRP,ADA,LUNA,AVAX")
    // .get("https://coinlib.io/api/v1/coin?key=1ba60195f39ff3a1&pref=USD&symbol=BTC,ETH,USDT,BNB,USDC,SOL,XRP,ADA,LUNA,AVAX")
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
  
      console.log(allCoins);

      const messages = sellData;
      res.json({
        success: true,
        crypto: messages.crypto,
        quantity: messages.quantity,
        cryptoData: allCoins,
        message: 'all good',
      })
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
    sellData.crypto = req.body.crypto;
    sellData.quantity = req.body.quantity;
    userName= req.body.user;
    if(sellData.crypto == '' || sellData.quantity == ''){
      throw new Error("At least one field is empty");
    }else{

      const user = await User.findOne({user_name: userName}).exec();
       console.log("User coins: ",user.coins);

       //if the user has the coin they want to sell, and if they have sufficient quantity, update the quantity
       const validCoin = false;
       const validQuantity = false;
       user.coins.forEach(c=>{
         if(c.symbol===sellData.crypto){
           if(c.quantity>=sellData.quantity){
             c.quantity= c.quantity - sellData.quantity;
             validQuantity = true;
           }
           validCoin= true;
         }
       })

       if(validCoin===true){
         if(validQuantity===true){
           user.save();
           res.json({success: true, message: `Congratulations, you sold ${sellData.quantity} units of ${sellData.crypto}`})
         }
         else{
           res.json({success: false, message: `Sorry, you do not have ${sellData.quantity} units of ${sellData.crypto} to sell`})
         }
       }
       else{
         res.json({success: false, message: `Sorry, you do not own any units of ${sellData.crypto}`})
       }
       
       
       //console.log("updated coins: ", user.coins);

      //return res.json({success: true, message: "sell data post success"});
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
                //console.log(req.body)
                const user_name = req.body.user_name
                const your_name = req.body.your_name
                var password = req.body.password
                const email = req.body.email
                // try to save the message to the database
                var coins = []
                var stats = {
                  net_profit: 0,
                  all_time_high: 0,
                  fifty_two_week_high: 0,
                  account_age: 0,
                }
                var transactions = []
                const users = await User.find({user_name: user_name})
                if(users.length != 0 && user_name != "unittest"){
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
                    transactions: transactions,
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
                const user_name = req.body.user_name
                const password = req.body.password
                //compare with database
                const users = await User.find({user_name: user_name})
                if(users.length != 0){
                  const result = await bcrypt.compare(password, users[0].password)
                  if (result) {

                    console.log(users);
                    //currentUser = user_name;
                    //return res.json({success: true, message: "login success", user_name: user_name});

                    users.loggedIn = true;

                    return res.json({success: true, message: "login success", user: users});
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