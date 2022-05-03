require('dotenv').config({ silent: true }) // load environmental variables from a hidden file named .env
const express = require('express') // CommonJS import style!
const morgan = require('morgan') // middleware for nice logging of incoming HTTP requests
const cors = require('cors') // middleware for enabling CORS (Cross-Origin Resource Sharing) requests.
const bodyParser = require("body-parser"); // parsing posted json body
const mongoose = require('mongoose')
const path = require('path')
bcrypt = require('bcrypt'),
SALT_WORK_FACTOR = 10;

const { default: axios } = require('axios');

const app = express() // instantiate an Express object

app.use(express.static(path.join(__dirname + '/client')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});

app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' })) // log all incoming requests, except when in unit test mode.  morgan has a few logging default styles - dev is a nice concise color-coded style

app.use(cors()) // allow cross-origin resource sharing

// app.use(function (req, res, next) {
//   //res.header("Access-Control-Allow-Origin", "https://overdemoc.netlify.app"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Origin", "http://67.207.83.112:5002"); // update to match the domain you will make the request from          // CHNAGE HERE WHAT HERUKO
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data



//app.use(function(req, res, next) {
//  res.sendFile(path.join(__dirname, 'public', 'app.html'));
// });
//app.get('*', (req, res) => res.sendFile(path.resolve('client', 'index.html')));
// connect to database
mongoose
  .connect(`${process.env.DB_CONNECTION_STRING}`)
  .then(data => console.log(`Connected to MongoDB`))
  .catch(err => console.error(`Failed to connect to MongoDB: ${err}`))

// load the dataabase models we want to deal with
const { User } = require('./database/users')

//express validator
const { check, validationResult } = require('express-validator');


//REQUESTS FOR PORTFOLIO PAGE
app.post('/portfolio', async (req, res) => {
  try {

    userName = req.body.user;

    //if there is a user logged in, then show their coin portfolio 
    if(userName!==null){
      const user = await User.findOne({user_name: userName}).exec();
      const userCoins= user.coins;
      const userTrans = user.transactions;

    const allCoins = [];
    const allTrans = [];

    if(userCoins.length!==0){
    userCoins.forEach(coin => {
      const coinObj = {
        symbol: coin.symbol,
        quantity: coin.quantity,
      }
     
      allCoins.push(coinObj);
    })

    if(userTrans.length!==0){
      userTrans.forEach(trans =>{
        const tranObj ={
          symbol: trans.symbol,
          type: trans.type,
          quantity: trans.quantity,
          timestamp: trans.timestamp
        }
        allTrans.push(tranObj);
      })
    }

    console.log(allTrans)
    res.json({allCoins: allCoins, allTrans: allTrans})
  }
  }
    
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      message: err.message,
    })
  }
})


//REQUESTS FOR BUY PAGE
let buyData = {
  crypto: "Please Enter a Crypto",
  quantity: "Please Enter a Quantity",
};

app.get('/buy', async (req, res) => {
  try {
    await axios
    // .get("https://coinlib.io/api/v1/coin?key=c547247f9214255e&pref=USD&symbol=BTC,ETH,USDT,BNB,USDC,SOL,XRP,ADA,LUNA,AVAX")
    // .get("https://coinlib.io/api/v1/coin?key=1ba60195f39ff3a1&pref=USD&symbol=BTC,ETH,USDT,BNB,USDC,SOL,XRP,ADA,LUNA,AVAX")
    .get("https://coinlib.io/api/v1/coin?key=b73c908d4e773d9b&pref=USD&symbol=BTC,ETH,USDT,BNB,USDC,SOL,XRP,ADA,LUNA,AVAX")

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

      res.json({
        success: true,
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
        const dbUser = await User.findOne(user).exec();

        let existingCoin = false;
        //check if the user already owns the coin
        //if they do, just update the quantity
         dbUser.coins.forEach(coin=>{
          if(coin.symbol===newCoin.symbol){
            coin.quantity+=Number(newCoin.quantity)
            dbUser.save();
            existingCoin = true;
          }
        }) 
      
        //if user doesn't have the coin, push it onto the array
        if(existingCoin===false){
          await User.findOneAndUpdate(user, {$push: {coins:newCoin}}, {new:true})
        }
        const date = new Date().toDateString() + ", "+ new Date().toTimeString().split(' ')[0]
        await User.findOneAndUpdate(user, {$push: {transactions:{symbol: newCoin.symbol, type: "BUY", quantity: newCoin.quantity, timestamp: date}}}, {new:true})
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
};

app.get('/sell', async (req, res) => {        
  try {

    await axios
    // .get("https://coinlib.io/api/v1/coin?key=c547247f9214255e&pref=USD&symbol=BTC,ETH,USDT,BNB,USDC,SOL,XRP,ADA,LUNA,AVAX")
    // .get("https://coinlib.io/api/v1/coin?key=1ba60195f39ff3a1&pref=USD&symbol=BTC,ETH,USDT,BNB,USDC,SOL,XRP,ADA,LUNA,AVAX")
    .get("https://coinlib.io/api/v1/coin?key=b73c908d4e773d9b&pref=USD&symbol=BTC,ETH,USDT,BNB,USDC,SOL,XRP,ADA,LUNA,AVAX")
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
       let validCoin = false;
       let validQuantity = false;
       user.coins.forEach(c=>{
         if(c.symbol===sellData.crypto){
           if(c.quantity>=sellData.quantity){
             c.quantity= c.quantity - sellData.quantity;
             const date = new Date().toDateString() + ", "+ new Date().toTimeString().split(' ')[0]
             user.transactions.push({symbol: c.symbol, type: "SELL", quantity: sellData.quantity, timestamp: date})
             //delete coin from array if they sell all units
             if(c.quantity===0){
               user.coins.remove(c);
             }
             validQuantity = true;
           }
           validCoin= true;
         }
       })

       //send front-end success/failure messages
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
    // .get("https://coinlib.io/api/v1/coin?key=9810ec37c3769c55&pref=USD&symbol=BTC,ETH,USDT,BNB,USDC,SOL,XRP,ADA,LUNA,AVAX")
    .get("https://coinlib.io/api/v1/coin?key=b73c908d4e773d9b&pref=USD&symbol=BTC,ETH,USDT,BNB,USDC,SOL,XRP,ADA,LUNA,AVAX")
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
//app.use(cors())

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

module.exports = app 
