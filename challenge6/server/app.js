const express = require('express')

const cors = require('cors');
const mongoose = require('./db/conn');
const path = require('path')
require('express-async-errors')
const app = express()
app.use(cors())
app.use(express.json())


app.use(express.static('dist'))

const jobRouter = require('./routes/jobs')
const userRouter = require('./routes/users')
const loginRouter = require('./controllers/login')
app.use('/api/users',userRouter)
app.use('/api/jobs',jobRouter)
app.use('/api/login', loginRouter)


//only use in test NODE_ENV
if (process.env.NODE_ENV === "test") {
  const testingRouter = require('./routes/testing');
  app.use('/api/testing', testingRouter)
}

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'), (err) => err && res.status(500).send(err));
})

module.exports = app