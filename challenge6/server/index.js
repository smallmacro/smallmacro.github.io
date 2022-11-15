// const fs = require("fs")
// let rawData = fs.readFileSync('./data.json')
// let jobs = JSON.parse(rawData)

require('dotenv').config({path: './.env'});
const PORT = process.env.PORT || 8080;

const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require('./db/conn');
const path = require('path')

app.use(cors())
app.use(express.json())


app.use(express.static('dist'))

const jobRoutes = require('./routes/jobs');

app.use(jobRoutes);

app.get('/*', (req, res) => {
  
  res.sendFile(path.join(__dirname, './dist/index.html'), (err) => err && res.status(500).send(err));
})

app.listen(PORT, () => {
  // dbo.connectToServer( (err) => {
  //   if (err) {
  //     console.error(err);
  //   }
  //   console.log("Connected Successfully");
  // })
  console.log(`Server running on port ${PORT}`)
})
