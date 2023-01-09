const Router = require('express').Router()
const controller = require('../controllers/EventController')

Router.get('/events', controller.GetEvents)
Router.get('/upcoming', controller.GetOnlyEvents)
Router.get('/announcements', controller.GetOnlyAnnouncements)
Router.post('/events', controller.PostEvent)
Router.delete('/delete/:event_id', controller.DeleteEvent)
Router.patch('/edit/:event_id', controller.EditEvent)

module.exports = Router
