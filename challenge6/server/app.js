const express = require('express')

const cors = require('cors');
const mongoose = require('./db/conn');
const path = require('path')
require('express-async-errors')
const app = express()
app.use(cors())
app.use(express.json())


app.use(express.static('dist'))

const jobRoutes = require('./routes/jobs');

app.use('/api/jobs',jobRoutes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'), (err) => err && res.status(500).send(err));
})

module.exports = app