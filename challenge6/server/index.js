const app = require('./app')
const http = require('http')
const logger = require('./utils/logger')
const config = require('./utils/config')
const PORT = config.PORT

const server = http.createServer(app);

// app.use(errorHandler)
server.listen(PORT, () => {
  // dbo.connectToServer( (err) => {
  //   if (err) {
  //     console.error(err);
  //   }
  //   console.log("Connected Successfully");
  // })
  logger.info(`Server running on port ${PORT}`)
})
