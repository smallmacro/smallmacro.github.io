const express = require('express');
const userRouter = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const ObjectId = require('mongodb').ObjectId



//add a new User
userRouter.route('/new').post( async (req, res) => {
  const {username, password, email,role} = req.body
  const existingUser = await User.findOne({username})
  if(existingUser){
    return res.status(400).json({
      error: 'username must be unique'
    })
  }
  
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    passwordHash,
    email,
    role
  })
  const savedUser = await user.save()
  res.status(201).json(savedUser)
})

//get all users with jobs owned by them
userRouter.route('/').get( async(req, res) => {
  const allUsers = await User.find({}).populate('jobs',
  {
    company:1,
    position:1,
    postedAt:1,
    contract:1,
  })
  res.status(200).json(allUsers)
})


module.exports = userRouter