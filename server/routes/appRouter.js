const Router = require('express').Router()

Router.get('/event', (request, response) => {
  console.log("You're in the second /hello route handler")
  response.send('This is the Express route for EVENTS.')
})

module.exports = Router
