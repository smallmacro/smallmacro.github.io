const fs = require("fs")
let rawData = fs.readFileSync('./data.json')
let jobs = JSON.parse(rawData)

require('dotenv').config({path: './.env'});
const PORT = process.env.PORT || 8080;

const express = require('express')
const app = express()
const cors = require('cors');
const dbo = require('./db/conn');

app.use(cors())
app.use(express.json())


app.use(express.static('dist'))

const jobRoutes = require('./routes/jobs');
app.use(jobRoutes);



app.listen(PORT, () => {
  dbo.connectToServer( (err) => {
    if (err) {
      console.error(err);
    }
  })
  console.log(`Server running on port ${PORT}`)
})
