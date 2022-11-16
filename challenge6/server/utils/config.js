require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.NODE_ENV === 'test'? process.env.TEST_MONGODB_URI :process.env.MONGODB_URI
const DB_NAME = process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_NAME : process.env.PRO_DATABASE_NAME

module.exports = {
  PORT,
  MONGODB_URI,
  DB_NAME
}