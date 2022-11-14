const mongoose = require('../db/conn')
const UserSchema = new mongoose.Schema({
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
},{collection:'users'})

const User = mongoose.model('user', UserSchema);
module.exports = User