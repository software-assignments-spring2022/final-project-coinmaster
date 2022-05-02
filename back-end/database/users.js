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
    balance: {
      type: Number,
      required: true,
    },
    coins: [{
      symbol:{type: String,required: true},
      quantity:{type: Number,required: true}
    }],
    transactions: [{
      symbol:{type: String,required: true},
      type: {type: String, required: true},
      price:{type: Number,required: true},
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