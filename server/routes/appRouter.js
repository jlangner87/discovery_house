const Router = require('express').Router()
const controller = require('../controllers/EventController')

Router.get('/events', controller.GetEvents)
Router.post('/events', controller.PostEvent)

module.exports = Router
