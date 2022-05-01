const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    your_name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    coins: [{
      symbol:{type: String,required: true},
      quantity:{type: Number,required: true}
    }],
    stats: {
      type: [{
        net_profit: {type: Number, required: true},
        all_time_high: {type: Number, required: true},
        fifty_two_week_high: {type: Number, required: true},
        account_age: {type: Number, required: true},
      }]
    },
    transactions: [{
      symbol:{type: String,required: true},
      type: {type: String, required: true},
      //price:{type: Number,required: true},
      quantity:{type: Number,required: true},
      timestamp:{type: String, default: new Date().toDateString() + ", "+ new Date().toTimeString().split(' ')[0], required: true},
    }],

  },
  {
    timestamps: true,
  }
)

// create mongoose Model
const User = mongoose.model('User', userSchema)

// export the model so other modules can import it
module.exports = {
  User,
}