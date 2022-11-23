const Job = require('../models/Jobs')
const User = require('../models/User')

const testingRouter = require('express').Route()

testingRouter.post('/reset', async (req, res) => {
  await Job.deleteMany({})
  await User.deleteMany({})
  res.status(204).end()
})

module.exports = testingRouter