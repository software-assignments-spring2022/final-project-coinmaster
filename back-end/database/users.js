const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    user_name: {
      type: String,
      required: true,
      unique: true,
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
      quantity:{type: String,required: true}
    }],
    stats: {
      type: [{
        net_profit: {type: Number, required: true},
        all_time_high: {type: Number, required: true},
        fifty_two_week_high: {type: Number, required: true},
        account_age: {type: Number, required: true},
      }]
    }

    // handle: {
    //   type: String,
    //   required: true,
    // },
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