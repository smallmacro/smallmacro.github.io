// const { MongoClient } = require("mongodb");
// const URI = process.env.MONGODB_URI;
// const client = new MongoClient(URI,{
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

// // module.exports = client;
// let dbConnection;
// module.exports = {
//   connectToServer : async (callback) => {
//     try {
//       await client.connect();
//       dbConnection = client.db(process.env.DATABASE_NAME); 
//       return callback();
//     } catch (e) {
//       callback(err)
//       console.error(e);
//     } finally{
//       // client.close()
//     }
//   },
//   getDb: function () {
//     return dbConnection
//   }
// }

const URI = process.env.MONGODB_URI;
const mongoose = require('mongoose');
const options = {
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  dbName:'devjobs',
}
let dbConnection;
mongoose.connect(URI, options)
module.exports = mongoose;
