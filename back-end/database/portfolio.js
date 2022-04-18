const mongoose = require('mongoose')
const Schema = mongoose.Schema

const portfolioSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

// create mongoose Model
const Portfolio = mongoose.model('Portfolio', portfolioSchema)

// export the model so other modules can import it
module.exports = {
    Portfolio,
}