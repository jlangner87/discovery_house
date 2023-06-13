const { where } = require('sequelize')
const { Event, Sequelize } = require('../models')

const GetEvents = async (req, res) => {
  try {
    const all = await Event.findAll()
    res.send(all)
  } catch (err) {
    throw err
  }
}

// const GetEventById = async (req, res) => {
//   let eventId = parseInt(req.params.event_id)
//   let selectedEvent = await Event.findOne({
//     where: { id: eventId }
//   })
//   res.send(selectedEvent)
//   res.send(`Event with id ${eventId}`)
// }

const AdminView = async (req, res) => {
  let eventId = parseInt(req.params.event_id)
  let eventView = await Event.findOne({
    where: { id: eventId }
  })
  res.send(eventView)
}

const PostEvent = async (req, res) => {
  try {
    let eventDetails = {
      ...req.body
    }
    let newEvent = await Event.create(eventDetails)
    res.send(newEvent)
  } catch (err) {
    throw err
  }
}

const DeleteEvent = async (req, res) => {
  try {
    let eventId = parseInt(req.params.event_id)
    await Event.destroy({
      where: { id: eventId }
    })
    res.send('The post has been removed')
  } catch (err) {
    throw err
  }
}

const EditEvent = async (req, res) => {
  try {
    let eventId = parseInt(req.params.event_id)
    let editedEvent = await Event.update(req.body, {
      where: { id: eventId },
      returning: true
    })
    res.send(editedEvent)
  } catch (err) {
    throw err
  }
}

module.exports = {
  GetEvents,
  AdminView,
  PostEvent,
  DeleteEvent,
  EditEvent
}
