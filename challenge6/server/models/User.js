const mongoose = require('../db/conn')
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique:true,
    required: true,
  },
  passwordHash:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required'
  },
  role:{
    type: String,
    default: "Basic",
    required: true,
  },
  jobs:[
    { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job'
    }
  ]
},{collection:'users'})

UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const User = mongoose.model('user', UserSchema);
module.exports = User