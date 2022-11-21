const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const loginRouter = require('express').Router()

//when a valid user login, the server will compare its password with its hash format,
// and then generate a token, which will send back to client-side.
loginRouter.route('/').post(async(request, response) => {
  const {username, password } = request.body
  
  const user = await User.findOne({username})
  const passwordCorrect = user === null 
    ? false
    : bcrypt.compare(password, user.passwordHash)
  
  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  }
  const token = jwt.sign(userForToken, process.env.SECRET)

  response.status(200).send({
    token,
    username: user.username,
    email: user.email
  })
  // response.status(200).send({
  //   message: "OK"
  // })
})

module.exports = loginRouter