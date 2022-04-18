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
      type: String,
    }]
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