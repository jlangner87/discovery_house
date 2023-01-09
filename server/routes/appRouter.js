const Router = require('express').Router()
const controller = require('../controllers/EventController')

Router.get('/events', controller.GetEvents)
Router.get('/upcoming', controller.GetOnlyEvents)
Router.get('/announcements', controller.GetOnlyAnnouncements)
Router.post('/events', controller.PostEvent)

module.exports = Router
