const Mongoose = require('mongoose')
const UserSchema = new Mongoose.Schema({
  username: {
    type: String,
    unique:true,
    required: true,
  },
  password:{
    type: String,
    minilength:8,
    required: true,
  },
  role:{
    type: String,
    default: "Basic",
    required: true,
  },
})

const User = Mongoose.model('user', UserSchema);
module.exports = User