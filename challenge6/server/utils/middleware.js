const logger = require('./logger')
const requestLogger = (req, res, next) => {
  logger.info('Method:', req.method)
  logger.info('Path:', req.path)
  logger.info('body:', req.body)
  logger.info('----')
  next()
}

const errorHandler = (error, req, response, next) => {
  logger.error(error.message)
  if(error.name === 'CastError'){
    return res.status(400).send({error: 'malformatted id'})
  }else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({
      error: 'invalid token'
    })
  }else if (error.name === 'TokenExpiredError') {
    return response.status(401).json({
      error: 'token expired'
    })
  }
  next(error)
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}



module.exports = {
  errorHandler,
  unknownEndpoint,
  requestLogger,
}