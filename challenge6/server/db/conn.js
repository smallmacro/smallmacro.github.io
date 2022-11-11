const { MongoClient } = require("mongodb");
const URI = process.env.MONGODB_URI;
const client = new MongoClient(URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// module.exports = client;
let dbConnection;
module.exports = {
  connectToServer : async (callback) => {
    try {
      await client.connect();
      dbConnection =  client.db('devjobs'); 
      return callback();
    } catch (e) {
      callback(err)
      console.error(e);
    } finally{
      // client.close()
    }
  },
  getDb: function () {
    return dbConnection
  }
}