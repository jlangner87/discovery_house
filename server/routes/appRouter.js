const Router = require('express').Router()
const controller = require('../controllers/EventController')

Router.get('/feed', controller.GetEvents)
Router.get('/admin/:event_id', controller.AdminView)
Router.post('/events', controller.PostEvent)
Router.delete('/delete/:event_id', controller.DeleteEvent)
Router.patch('/edit/:event_id', controller.EditEvent)

module.exports = Router
