const Router = require('express').Router()
const controller = require('../controllers/EventController')

Router.get('/events', controller.GetEvents)

module.exports = Router
