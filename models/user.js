const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  cars: [{
    type: Schema.Types.ObjectId,
    ref: 'car'
  }]
})

const User = mongoose.model('user', UserSchema)

module.exports = User